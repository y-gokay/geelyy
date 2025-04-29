import Cta from '@/components/cta/cta';
import { getAgreement } from '@/services/api';

async function CtaContainer({ data }) {
    const { data: { Brochure = [
        {
            id: 1,
            Content: "Default notification content 1"
        },
        {
            id: 2,
            Content: "Default notification content 2. <a target=\"_blank\" class=\"text-success-50 ml-1 underline\" href=\"/privacy-policy/\">Privacy Policy</a>"
        }
    ] } = {} } = await getAgreement() || { data: {} };
    const { data: { Newsletter = [
        {
            id: 1,
            Content: "Default notification content 1"
        },
        {
            id: 2,
            Content: "Default notification content 2. <a target=\"_blank\" class=\"text-success-50 ml-1 underline\" href=\"/privacy-policy/\">Privacy Policy</a>"
        }
    ] } = {} } = await getAgreement() || { data: {} };
    return (  
        <Cta data={data} brochure={Brochure} newsletter={Newsletter} />
    );
}

export default CtaContainer;