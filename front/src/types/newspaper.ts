export interface Newspaper {
    id: number;
    title: string;
    description: string;
    images: string;
    likes: number;
    is_liked: boolean;
}

export interface User{
    id:number;
    name:string;
    icon_url:string;
}

export interface Comment{
    id:number;
    user:User;
    content:string;
    created_at:string;
}