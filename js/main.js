@media (max-width: 1024px) {
    .container {
        padding: 0 20px;
    }
    
    .hero-text h1 {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .hero-content {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .stats {
        justify-content: center;
    }
    
    .visa-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-links {
        justify-content: center;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .social-links {
        justify-content: center;
    }
    
    .hero-text h1 {
        font-size: 1.8rem;
    }
    
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-primary);
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        border-bottom: 1px solid var(--border);
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .mobile-menu-btn {
        display: block;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 16px;
    }
    
    .hero-text h1 {
        font-size: 1.5rem;
    }
    
    .btn {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
    }
    
    .stats {
        gap: 1rem;
    }
    
    .stat-number {
        font-size: 1.2rem;
    }
    
    .hero-animation {
        font-size: 4rem;
    }
    
    .contact-link {
        font-size: 0.875rem;
        padding: 0.4rem 0.8rem;
    }
}
