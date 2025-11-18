import authService from './auth_service';

interface TeamMember {
  id: number;
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;
  Imagem_funcionario: string;
  descricao_funcionario: string;
  nome_funcionario: string;
}

interface TeamCarouselResponse {
  data: TeamMember[];
}

class TeamCarouselService {
  private baseUrl = 'http://localhost:8055';
  private cache: TeamMember[] | null = null;
  private cacheExpiry: number | null = null;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

  /**
   * Busca todos os funcionários do carrossel
   */
  async getTeamMembers(): Promise<TeamMember[]> {
    // Retorna do cache se ainda válido
    if (this.cache && this.cacheExpiry && Date.now() < this.cacheExpiry) {
      return this.cache;
    }

    try {
      const headers = await authService.getAuthHeader();

      const response = await fetch(`${this.baseUrl}/items/carrossel_funcionarios`, {
        method: 'GET',
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar funcionários: ${response.status} ${response.statusText}`);
      }

      const result: TeamCarouselResponse = await response.json();

      // Atualiza o cache
      this.cache = result.data;
      this.cacheExpiry = Date.now() + this.CACHE_DURATION;

      return result.data;
    } catch (error) {
      console.error('Erro ao buscar funcionários:', error);
      throw error;
    }
  }

  /**
   * Busca um funcionário específico pelo ID
   */
  async getTeamMemberById(id: number): Promise<TeamMember | undefined> {
    const members = await this.getTeamMembers();
    return members.find(member => member.id === id);
  }

  /**
   * Busca um funcionário específico pelo nome
   */
  async getTeamMemberByName(name: string): Promise<TeamMember | undefined> {
    const members = await this.getTeamMembers();
    return members.find(member => 
      member.nome_funcionario.toLowerCase().includes(name.toLowerCase())
    );
  }

  /**
   * Retorna a URL completa da imagem do funcionário
   */
  getImageUrl(imageId: string): string {
    return `${this.baseUrl}/assets/${imageId}`;
  }

  /**
   * Limpa o cache manualmente
   */
  clearCache(): void {
    this.cache = null;
    this.cacheExpiry = null;
  }

  /**
   * Força atualização dos dados (ignora cache)
   */
  async refreshTeamMembers(): Promise<TeamMember[]> {
    this.clearCache();
    return this.getTeamMembers();
  }
}

// Exporta uma instância singleton
export const teamCarouselService = new TeamCarouselService();
export default teamCarouselService;
export type { TeamMember, TeamCarouselResponse };
