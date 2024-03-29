export interface Recipe {
    _id: string,
    title: string,
    ingredients: { name: string, amount: string, unit: string }[],
    mealType: string,
    steps: string[],
    description: string,
    tags: string[],
    time: number,
    recipeFor: number,
    ratings: { userId: string, grade: number },
    averageRating?: number,
    authorId?: string,
    image?: string
}
