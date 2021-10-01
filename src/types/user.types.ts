export interface authData {
    id: string
};

export interface dataLogin {
    email: string;
    password: string;
};

export interface DataRegister {
    email: string,
    name: string,
    last_name: string,
    image_url: string,
    type: string,
    password: string,
    phone: string,
    gender: string,
    birthdate: Date,
}