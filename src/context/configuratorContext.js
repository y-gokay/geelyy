'use client';

import { createContext, useContext, useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

const ConfiguratorContext = createContext();

const ConfiguratorLoading = () => {
    return <div className="konfigurator-yukleniyor">Yükleniyor...</div>;
};

function ConfiguratorProviderInner({ children }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    
    // Tüm konfigürasyon değerlerini sakla
    const [config, setConfig] = useState({
        step: 1,
        length: null,
        height: null,
        battery: null,
        design: null,
        extras: []
    });
    
    // URL'den parametreleri yükle (sayfa ilk yüklendiğinde)
    useEffect(() => {
        const step = searchParams.get('step') || 1;
        const length = searchParams.get('length');
        const height = searchParams.get('height');
        const battery = searchParams.get('battery');
        const design = searchParams.get('design');
        const extras = searchParams.get('extras')?.split(',') || [];
        
        setConfig({
            step: parseInt(step),
            length,
            height,
            battery,
            design,
            extras
        });
    }, []);
    
    // Konfigürasyon değiştiğinde URL'yi güncelle
    const updateConfig = (newConfig) => {
        // Adım değişiyorsa ve önceki bir adıma dönülüyorsa
        if (newConfig.step && newConfig.step < config.step) {
            // Adım değişimine göre, sonraki adımların verilerini sıfırla
            switch (newConfig.step) {
                case 1: // Uzunluk adımına dönüldüyse
                    newConfig = {
                        ...newConfig,
                        height: null,
                        battery: null,
                        design: null,
                        extras: []
                    };
                    break;
                    
                case 2: // Yükseklik adımına dönüldüyse
                    newConfig = {
                        ...newConfig,
                        height: null,
                        battery: null,
                        design: null,
                        extras: []
                    };
                    break;
                    
                case 3: // Batarya adımına dönüldüyse
                    newConfig = {
                        ...newConfig,
                        battery: null,
                        design: null,
                        extras: []
                    };
                    break;
                    
                case 4: // Tasarım adımına dönüldüyse
                    newConfig = {
                        ...newConfig,
                        design: null,
                        extras: []
                    };
                    break;
                    
                case 5: // Ekstra adımına dönüldüyse
                    newConfig = {
                        ...newConfig,
                        extras: []
                    };
                    break;
            }
        }
        
        const updatedConfig = { ...config, ...newConfig };
        setConfig(updatedConfig);
        
        // URL'yi güncelle
        updateURL(updatedConfig);
    };
    
    // Sadece adım değiştiğinde URL'yi güncelle
    const goToStep = (step) => {
        updateConfig({ step });
    };
    
    // URL'yi güncelle
    const updateURL = (updatedConfig) => {
        const params = new URLSearchParams();
        
        // Sadece tanımlı değerleri URL'ye ekle
        if (updatedConfig.step) params.set('step', updatedConfig.step);
        if (updatedConfig.length) params.set('length', updatedConfig.length);
        if (updatedConfig.height) params.set('height', updatedConfig.height);
        if (updatedConfig.battery) params.set('battery', updatedConfig.battery);
        if (updatedConfig.design) params.set('design', updatedConfig.design);
        if (updatedConfig.extras.length > 0) params.set('extras', updatedConfig.extras.join(','));
        
        // URL güncelleme - router yerine doğrudan history API kullanılıyor
        const url = `${pathname}?${params.toString()}`;
        window.history.replaceState({ path: url }, '', url);
    };
    
    // Bir sonraki adıma git
    const goToNextStep = () => {
        if (config.step < 6) {
            goToStep(config.step + 1);
        }
    };
    
    const contextValue = {
        config,
        updateConfig,
        goToStep,
        goToNextStep
    };
    
    return (
        <ConfiguratorContext.Provider value={contextValue}>
            {children}
        </ConfiguratorContext.Provider>
    );
}

export function ConfiguratorProvider({ children }) {
    return (
        <Suspense fallback={<ConfiguratorLoading />}>
            <ConfiguratorProviderInner>
                {children}
            </ConfiguratorProviderInner>
        </Suspense>
    );
}

export function useConfigurator() {
    const context = useContext(ConfiguratorContext);
    if (context === undefined) {
        throw new Error('useConfigurator must be used within a ConfiguratorProvider');
    }
    return context;
} 