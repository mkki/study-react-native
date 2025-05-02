import { ICatResponse } from "@/types/Photo";

const BASE_URL = 'https://cataas.com/api';

async function load<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching JSON:', error);
    throw error;
  }
}

export async function listAllCuteCats(): Promise<string[]> {
  const url = `${BASE_URL}/cats?limit=10`;
  const data = await load<ICatResponse[]>(url);
  return data.map((cat) => cat.id);
}

export function getCatImageById(id: string): string {
  return `https://cataas.com/cat/${id}`;
}
