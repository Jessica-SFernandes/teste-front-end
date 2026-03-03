export interface ProductItem {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const API_URL =
  '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export const getProducts = async (): Promise<ProductItem[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Erro ao carregar os produtos');
    }

    const data = await response.json();

    return data.products; // 👈 AGORA SIM está correto
  } catch (error) {
    console.error('Erro na service de API:', error);
    return [];
  }
};