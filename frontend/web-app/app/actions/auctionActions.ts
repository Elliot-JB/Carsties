'use server'

import { Auction, PagedResult } from "@/types/Index";
import { getTokenWorkAround } from "./authActions";


export async function getData(query: string): Promise<PagedResult<Auction>> {
    const res = await fetch(`http://localhost:6001/search${query}`);

    if (!res.ok) throw new Error('Failed to fetch data');

    return res.json();
}

export async function UpdateAuctionTest() {
    const data = {
        mileage: Math.floor(Math.random() * 100000) + 1
    }

    const token = await getTokenWorkAround();

    const res = await fetch('http://localhost:6001/auctions/dc1e4071-d19d-459b-b848-b5c3cd3d151f', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token?.access_token
        },
        body: JSON.stringify(data)
    })

    if(!res.ok) return {status: res.status, message: res.statusText}

    return res.statusText;
}