// Funcionalidades JavaScript para o site clonado

document.addEventListener('DOMContentLoaded', function() {
    
    // Animação de entrada para os elementos
    const animateElements = () => {
        const elements = document.querySelectorAll('.product-card, .featured-product, .sidebar-item');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };

    // Efeito de hover nos ícones da sidebar
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Funcionalidade do banner principal
    const headerBanner = document.querySelector('.header-banner');
    if (headerBanner) {
        headerBanner.addEventListener('click', function() {
            // Simula redirecionamento para materiais de educação física
            showNotification('Redirecionando para materiais de Ed. Física...');
        });
    }

    // Funcionalidade dos produtos bloqueados
    const lockedProducts = document.querySelectorAll('.product-card.locked');
    lockedProducts.forEach(product => {
        product.addEventListener('click', function() {
            showNotification('Este produto está bloqueado. Faça upgrade para acessar!');
        });
    });

    // Funcionalidade do produto liberado
    const featuredProduct = document.querySelector('.featured-product');
    if (featuredProduct) {
        featuredProduct.addEventListener('click', function() {
            showNotification('Acessando: 500 Treinos de Futsal');
        });
    }

    // Funcionalidade do botão WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            // Simula abertura do WhatsApp
            const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos.');
            const whatsappUrl = `https://wa.me/5511999999999?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Função para mostrar notificações
    function showNotification(message) {
        // Remove notificação existente se houver
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Cria nova notificação
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: bold;
            animation: slideIn 0.3s ease;
        `;

        // Adiciona animação CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        // Remove a notificação após 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Efeito de parallax no banner
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const banner = document.querySelector('.header-banner');
        if (banner) {
            banner.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Navegação da sidebar (simulada)
    const navIcons = document.querySelectorAll('.nav-icon');
    navIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            const sections = ['Home', 'Conquistas', 'Buscar', 'Chat', 'Favoritos'];
            showNotification(`Navegando para: ${sections[index]}`);
        });
    });

    // Efeito de loading inicial
    const showLoadingEffect = () => {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            color: white;
            font-size: 1.5rem;
        `;
        loader.innerHTML = '<div>Carregando área de membros...</div>';
        
        document.body.appendChild(loader);
        
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
                animateElements();
            }, 500);
        }, 1500);
    };

    // Inicia o efeito de loading
    showLoadingEffect();

    // Adiciona efeitos de hover personalizados
    const addHoverEffects = () => {
        const style = document.createElement('style');
        style.textContent = `
            .product-card:hover .lock-icon {
                animation: shake 0.5s ease-in-out;
            }
            
            @keyframes shake {
                0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
                25% { transform: translate(-50%, -50%) rotate(-5deg); }
                75% { transform: translate(-50%, -50%) rotate(5deg); }
            }
            
            .header-banner::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                transition: left 0.5s;
            }
            
            .header-banner:hover::before {
                left: 100%;
            }
        `;
        document.head.appendChild(style);
    };

    addHoverEffects();
});

// Função para redimensionamento responsivo
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (window.innerWidth <= 768) {
        sidebar.style.width = '60px';
        mainContent.style.marginLeft = '60px';
    } else {
        sidebar.style.width = '80px';
        mainContent.style.marginLeft = '80px';
    }
});

