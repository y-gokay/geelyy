const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";

export async function insertBrochure(formData) {
  try {
    console.log('Data received in insertBrochure function:', formData);
    
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
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
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        termsAccepted1: formData.termsAccepted1,
        termsAccepted2: formData.termsAccepted2
      }
    };

    console.log('Request Data:', JSON.stringify(requestData, null, 2));

    const res = await fetch(`${BASE_URL}/brochures`, {
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
    console.error('Error in insertBrochure:', error);
    throw new Error(error.message || 'An error occurred, please try again');
  }
}
