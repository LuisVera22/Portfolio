import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import proyectoHogar from '../../assets/proyHogar-logo.png';
import rbcLab from '../../assets/rbc.png';
import styles from './ProjectsStyles.module.css';

function Projects() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };


  // Referencias para animaciones
  const titleRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const dividerRef = useRef(null);

  // Estados de visibilidad
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const isProject1InView = useInView(project1Ref, { once: false, amount: 0.3 });
  const isProject2InView = useInView(project2Ref, { once: false, amount: 0.3 });
  const isDividerInView = useInView(dividerRef, { once: false, amount: 0.2 });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const dividerVariants = {
    hidden: { opacity: 0, width: 0 },
    show: {
      opacity: 1,
      width: "80px",
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className={styles.container}>
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={isTitleInView ? "show" : "hidden"}
        variants={titleVariants}
      >
        <p>Experiencia Laboral</p>
        <h1 className="sectionTitle">Proyectos</h1>
      </motion.div>

      <motion.div 
        ref={project1Ref}
        initial="hidden"
        animate={isProject1InView ? "show" : "hidden"}
        variants={cardVariants}
        className={styles.projectsContainer}>
        <div
          className={`${styles.card} ${activeCard === 0 ? styles.active : ''}`}
          onClick={() => toggleCard(0)}
        >
          <div className={styles.banner_card}>
            <img src={rbcLab} alt="" className={styles.card_image} />
            <div className={styles.span_card}>
              <div className={styles.loader}>
                <p>Presione para ver</p>
                <div className={styles.words}>
                  <span className={styles.word}>la empresa</span>
                  <span className={styles.word}>referencias</span>
                  <span className={styles.word}>responsabilidades</span>
                  <span className={styles.word}>tecnologías usadas</span>
                  <span className={styles.word}>información relevante</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card__content}>
            <div className={styles.card2}>
              <div className={styles.mac_header}>
                <span className={styles.red}></span>
                <span className={styles.yellow}></span>
                <span className={styles.green}></span>
              </div>
              <span className={styles.card_title}>Practicante Desarrollador Full Stack</span>
              <p className={styles.card_description}>
                Octubre 2024 - Diciembre 2024
              </p>
              <span className={styles.card_tag}>Ver más sobre el proyecto</span>
              <div className={styles.code_editor}>
                Practicante en la empresa SPEKTRO 360
                <pre><code>&lt;!-- Referencia --&gt;</code></pre>
                Luis Gutierrez - Jefe Directo <br />
                <code>Número de celular: +51 996 163 415</code>
                <pre><code>&lt;!-- Responsabilidades --&gt;</code></pre>
                <code>
                  Colaborar en la renovación de la intranet de la empresa,
                  desarrollando nuevas funcionalidades y corrigiendo errores
                  en referencia al sistema existente.
                </code>
                <pre><code>&lt;!-- Tecnologías usadas --&gt;</code></pre>
                <code>PHP, Laravel 10, Sanctum</code>
                <br />
                <code>Vue.js, HTML, CSS, JQuery</code>
                <br />
                <code>MySQL</code>
                <br />
                <code>GitLab</code>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.hr
        ref={dividerRef}
        initial="hidden"
        animate={isDividerInView ? "show" : "hidden"}
        variants={dividerVariants}
      />

      <motion.div
        ref={project2Ref}
        initial="hidden"
        animate={isProject2InView ? "show" : "hidden"}
        variants={cardVariants}
        className={styles.projectsContainer}
      >
        <div
          className={`${styles.card} ${activeCard === 1 ? styles.active : ''}`}
          onClick={() => toggleCard(1)}
        >
          <div className={styles.banner_card}>
            <img src={proyectoHogar} alt="" className={styles.card_image} />
            <div className={styles.span_card}>
              <div className={styles.loader}>
                <p>Presione para ver</p>
                <div className={styles.words}>
                  <span className={styles.word}>la empresa</span>
                  <span className={styles.word}>referencias</span>
                  <span className={styles.word}>responsabilidades</span>
                  <span className={styles.word}>tecnologías usadas</span>
                  <span className={styles.word}>información relevante</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card__content}>
            <div className={styles.card2}>
              <div className={styles.mac_header}>
                <span className={styles.red}></span>
                <span className={styles.yellow}></span>
                <span className={styles.green}></span>
              </div>
              <span className={styles.card_title}>Practicante Desarrollador Full Stack</span>
              <p className={styles.card_description}>
                Marzo 2025 - Actualidad
              </p>
              <span className={styles.card_tag}>Ver más sobre el proyecto</span>
              <div className={styles.code_editor}>
                <code>Practicante en la empresa Tendencia Peru</code>
                <pre><code>&lt;!-- Referencia --&gt;</code></pre>
                <code>Luis Gutierrez - Jefe Directo </code><br />
                <code>Número de celular: +51 996 163 415</code>
                <pre><code>&lt;!-- Responsabilidades --&gt;</code></pre>
                <code>
                  Colaboración en el desarrollo del portal web de Proyecto Hogar,
                  empresa de servicios inmobiliarios, que incluye la creación de diseños UX/UI,
                  la codificación de la página web y la implementación de la base de datos.
                </code>
                <pre><code>&lt;!-- Tecnologías usadas --&gt;</code></pre>
                <code>Java, Spring Boot</code>
                <br />
                <code>HTML, CSS, JavaScript</code>
                <br />
                <code>MySQL</code>
                <br />
                <code>GitLab</code>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;