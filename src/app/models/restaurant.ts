export interface ContactInfo {
    webSiteUrl: String;
    email: String;
    phone: String;
}

export interface Location {
    lng: number;
    lat: number;
}

export interface Address {
    street: String;
    city: String;
    state: String;
    location: Location
}

export interface Restaurant {
    id: String;
    name: String;
    contactInfo: ContactInfo;
    address: Address;
    rating: number;
}
