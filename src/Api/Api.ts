import { ITodo, IUser } from "../Components/GlobalTypes/types";

const URL = 'https://jsonplaceholder.typicode.com/';

async function request<T>(url: string, method = 'GET', body?: object | string | null): Promise<T> {
    const data = await fetch(`${URL}${url}`, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: {
            'Content-type': 'application/json',
        },
    });

    if (data.ok) {
        return data.json();
    }
    throw new Error('Sorry Api Error');
};

// User Api
export async function getUsers() {
    try {
        const data = await request<IUser[]>('users');
        return data
    } catch (e) {
        throw new Error('Получение Юзеров прервано.');
    }
};

export async function getOneUser(id?: string) {
    try {
        const data = await request<IUser>(`users/${id}`)
        return data
    } catch (e) {
        throw new Error('Получение Юзера прервано.')
    }
}

// Todo Api
export async function getTodo() {
    try {
        const data = await request<ITodo[]>('todos?_limit=10');
        return data
    } catch (e) {
        throw new Error('Получение туду прервано')
    }
}

export async function getOneTodo(id?: string) {
    try {
        const data = await request<ITodo>(`todos/${id}`);
        return data
    } catch (e) {
        throw new Error('Получение одной Туду прервано.')
    }
}