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
    last_name?: string | null,
    image_url?: string | null,
    type: string,
    password: string,
    phone: string,
    gender?: string | null,
    birthdate?: string,
    profession_id?: string | null,
    city_id?: string,
    nit?: string | null,
    name_legal_representative?: string | null,
    phone_legal_representative?: string | null,
    email_legal_representative?: string | null,
}