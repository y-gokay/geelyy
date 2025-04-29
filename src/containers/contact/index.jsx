import Contact from '@/components/contact/contact';
import { getAgreement } from '@/services/api';

async function ContactContainer() {
    const { data } = await getAgreement();
    
    return ( 
        <Contact data={data} />
     );
}

export default ContactContainer;