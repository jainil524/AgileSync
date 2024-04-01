import { useState } from 'react';



export default async function fetchRequest(url, options = {}) {

    const response = await fetch(url, options);

    const responseData = await response.json();

    return responseData;
}


