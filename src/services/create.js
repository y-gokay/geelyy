const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";

export async function insertContact(formData) {
  try {
    console.log('Data received in insertContact function:', formData);
    
    const requiredFields = ['name', 'email', 'phone', 'postcode', 'model', 'topic'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
        console.warn('Missing fields:', missingFields);
    }
    
    const headers = new Headers();
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    
    if (!token) {
      throw new Error("API token is missing");
    }
    
    headers.append("Authorization", `Bearer ${token}`);
    headers.append("Content-Type", "application/json");

    const requestData = {
      data: {
        model: formData.model,
        topic: formData.topic,
        type: formData.type,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        postcode: formData.postcode,
        time: formData.purchaseTime,
        companyName: formData.type === 'Fleet' ? formData.name : null,
        fleetSize: formData.type === 'Fleet' ? formData.fleetSize : null
      }
    };

    console.log('Request Data:', JSON.stringify(requestData, null, 2));

    const res = await fetch(`${BASE_URL}/contacts`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestData),
      redirect: "follow"
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      console.error('Error Response:', errorData);
      throw new Error(errorData?.error?.message || `HTTP error! status: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(error.message || 'An error occurred, please try again');
  }
}