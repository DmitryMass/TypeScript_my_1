// User types
export interface IAdress {
    street: string;
    city: string;
    zipcode?: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAdress

}
//  Todo types
export interface ITodo {
    id: number,
    title: string,
    completed: boolean
}