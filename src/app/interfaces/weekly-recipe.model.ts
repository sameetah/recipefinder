export interface RecipeModel {
  offset?: number;
  number?: number;
  results: SubRecipeResult[];
  totalresults: number;
}

export interface SubRecipeResult {
  id: number;
  title: string;
  image: string;
  imagetype: string;
}
