import { motion, useAnimation } from 'framer-motion';
import CV from '../../assets/CV - Luis Vera.pdf';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import heroImg from '../../assets/luis-pixar.png';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import { useTheme } from '../../common/ThemeContext';
import styles from './HeroStyles.module.css';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const controls = useAnimation();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  // Variantes de animación para entrada y salida
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 100 }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.6 }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="hero" className={styles.container}>
      <motion.div
        className={styles.colorModeContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false, 
          margin: "-100px 0px -100px 0px",
          amount: 0.3
        }}
        onViewportEnter={() => controls.start("visible")}
        onViewportLeave={() => controls.start("exit")}
        variants={imageVariants}
      >
        <motion.img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Luis Vera"
          variants={imageVariants}
        />
        <motion.img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          animate={floatAnimation}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.1 }
          }}
        />
      </motion.div>

      <motion.div 
        className={styles.info}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false, 
          margin: "-100px 0px -100px 0px",
          amount: 0.3
        }}
        onViewportEnter={() => controls.start("visible")}
        onViewportLeave={() => controls.start("exit")}
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>
          Luis Vera
        </motion.h1>
        
        <motion.h2 variants={itemVariants}>
          Desarrollador <br/> Full Stack
        </motion.h2>
        
        <motion.span variants={itemVariants}>
          <a href="https://github.com/LuisVera22" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/luis-david-vera-vilchez-710349313" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </motion.span>
        
        <motion.p 
          className={styles.description}
          variants={itemVariants}
        >
          Estudiante, apasionado por el desarrollo web y móvil, con experiencia profesional
          en Laravel, Vue.js y Spring Boot. Busco oportunidades para aportar valor y seguir
          creciendo profesionalmente.
        </motion.p>
        
        <motion.a
          href={CV}
          download
          variants={itemVariants}
        >
          <button className="hover">Descargar CV</button>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;