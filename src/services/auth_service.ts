interface LoginResponse {
  data: {
    expires: number;
    refresh_token: string;
    access_token: string;
  };
}

interface LoginCredentials {
  email: string;
  password: string;
}

class AuthService {
  private baseUrl = 'http://localhost:8055';
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private readonly DEFAULT_CREDENTIALS: LoginCredentials = {
    email: 'alexandrebaiocco@ucl.br',
    password: 'Admin@123',
  };

  /**
   * Realiza login e armazena os tokens
   * Usa credenciais padrão se não forem fornecidas
   */
  async login(credentials?: LoginCredentials): Promise<LoginResponse> {
    const loginCredentials = credentials || this.DEFAULT_CREDENTIALS;

    console.log('Tentando login com:', { 
      email: loginCredentials.email,
      url: `${this.baseUrl}/auth/login`
    });

    try {
      const response = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginCredentials),
        cache: 'no-store',
        mode: 'cors',
      });

      console.log('Response status:', response.status);
      console.log('Response URL:', response.url);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const errorMessage = errorData?.errors?.[0]?.message || response.statusText;
        console.error('Erro de autenticação:', {
          status: response.status,
          message: errorMessage,
          data: errorData
        });
        throw new Error(`Erro no login: ${response.status} - ${errorMessage}`);
      }

      const data: LoginResponse = await response.json();

      // Armazena os tokens em memória
      this.accessToken = data.data.access_token;
      this.refreshToken = data.data.refresh_token;

      // Salva no localStorage e sessionStorage
      if (typeof window !== 'undefined') {
        const tokenData = {
          access_token: data.data.access_token,
          refresh_token: data.data.refresh_token,
          expires_at: Date.now() + data.data.expires,
        };

        // Cache no localStorage (persistente)
        localStorage.setItem('auth_cache', JSON.stringify(tokenData));
        
        // Cache no sessionStorage (sessão atual)
        sessionStorage.setItem('auth_cache', JSON.stringify(tokenData));
      }

      console.log('Login realizado com sucesso!');
      return data;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // Limpa qualquer cache anterior em caso de erro
      this.logout();
      throw error;
    }
  }

  /**
   * Recupera os dados do cache
   */
  private getCachedData(): { access_token: string; refresh_token: string; expires_at: number } | null {
    if (typeof window === 'undefined') {
      return null;
    }

    // Tenta primeiro do sessionStorage (mais rápido)
    let cached = sessionStorage.getItem('auth_cache');
    
    // Se não encontrar, tenta do localStorage
    if (!cached) {
      cached = localStorage.getItem('auth_cache');
      
      // Se encontrou no localStorage, sincroniza com sessionStorage
      if (cached) {
        sessionStorage.setItem('auth_cache', cached);
      }
    }

    if (!cached) {
      return null;
    }

    try {
      return JSON.parse(cached);
    } catch {
      return null;
    }
  }

  /**
   * Retorna o access token atual
   */
  getAccessToken(): string | null {
    // Primeiro verifica em memória
    if (this.accessToken) {
      return this.accessToken;
    }

    // Tenta recuperar do cache
    const cached = this.getCachedData();
    if (cached) {
      this.accessToken = cached.access_token;
      return cached.access_token;
    }

    return null;
  }

  /**
   * Retorna o refresh token atual
   */
  getRefreshToken(): string | null {
    // Primeiro verifica em memória
    if (this.refreshToken) {
      return this.refreshToken;
    }

    // Tenta recuperar do cache
    const cached = this.getCachedData();
    if (cached) {
      this.refreshToken = cached.refresh_token;
      return cached.refresh_token;
    }

    return null;
  }

  /**
   * Verifica se o usuário está autenticado
   */
  isAuthenticated(): boolean {
    const token = this.getAccessToken();
    
    if (!token) {
      return false;
    }

    // Verifica se o token expirou usando o cache
    const cached = this.getCachedData();
    if (cached && Date.now() > cached.expires_at) {
      this.logout();
      return false;
    }

    return true;
  }

  /**
   * Remove os tokens e faz logout
   */
  logout(): void {
    // Limpa da memória
    this.accessToken = null;
    this.refreshToken = null;

    // Limpa do cache
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_cache');
      sessionStorage.removeItem('auth_cache');
    }
  }

  /**
   * Retorna o header de autorização para usar nas requisições
   * Faz login automático se não houver token
   */
  async getAuthHeader(): Promise<Record<string, string>> {
    let token = this.getAccessToken();
    
    // Se não houver token, faz login automático
    if (!token) {
      await this.login();
      token = this.getAccessToken();
    }

    if (!token) {
      throw new Error('Não foi possível autenticar');
    }

    return {
      'Authorization': `Bearer ${token}`,
    };
  }

  /**
   * Retorna o header de autorização de forma síncrona
   * Use apenas se tiver certeza que já está autenticado
   */
  getAuthHeaderSync(): Record<string, string> {
    const token = this.getAccessToken();
    
    if (!token) {
      throw new Error('Usuário não autenticado');
    }

    return {
      'Authorization': `Bearer ${token}`,
    };
  }
}

// Exporta uma instância singleton
export const authService = new AuthService();
export default authService;
