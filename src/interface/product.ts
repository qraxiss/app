interface Color {
    hex?: string;
    value?: string;
}
interface Size {
    value?: string;
}
export interface Product {
    slug?: string;
    name?: string;
    price?: number;
    image?: string;
    colors?: Color[];
    sizes?: Size[];
}