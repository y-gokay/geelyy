/**
 * Typography utility - Belirtilen HTML elementini oluşturur
 * @param {string} elementType - Oluşturulacak element türü (h1, h2, h3, div vs.)
 * @param {Object} props - Element için özellikler
 * @param {React.ReactNode} props.children - Element içeriği
 * @param {string} props.className - Element için sınıf isimleri
 * @returns {JSX.Element} - Oluşturulan element
 */
export const Typography = ({ 
  elementType = 'div', 
  children, 
  className = '', 
  ...props 
}) => {
  const Element = elementType || 'div';
  
  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
};

// Kullanım örneği:
// <Typography elementType="h1" className="başlık">Merhaba Dünya</Typography>
// <Typography elementType="p">Bu bir paragraf</Typography>
// <Typography>Bu bir div</Typography>
