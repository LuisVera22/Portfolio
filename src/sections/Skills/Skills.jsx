import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCss3Alt, FaGithub, FaGitlab, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiJquery, SiMongodb, SiSpringboot, SiTypescript } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import angularLogo from '../../assets/angular-logo.png';
import aspnetLogo from '../../assets/aspnet-logo.png';
import bizagiLogo from '../../assets/bizagi-logo.png';
import bootstrapLogo from '../../assets/bootstrap-logo.png';
import csharplogo from '../../assets/csharp-logo.png';
import ibmrhapsodyLogo from '../../assets/ibmrhapsody-logo.png';
import javaLogo from '../../assets/java-logo.png';
import microsoftofficeLogo from '../../assets/microsoftoffice-logo.png';
import pythonLogo from '../../assets/python-logo.png';
import sqlserverLogo from '../../assets/sqlserver-logo.png';
import starumlLogo from '../../assets/staruml-logo.png';
import vuejsLogo from '../../assets/vuejs-logo.png';
import styles from './SkillsStyles.module.css';


const skillMarkupLanguage = [
  { icon: <FaHtml5 size={40} />, label: 'HTML', color: '#d35400' },
  { icon: <FaCss3Alt size={40} />, label: 'CSS', color: '#3498db' },
  { icon: <img src={bootstrapLogo} width={40} height={40} />, label: 'Bootstrap', color: '#ec111b' },
]

const skillLanguage = [
  { icon: <FaPhp size={40} />, label: 'PHP', color: '#7a5bc5' },
  { icon: <img src={javaLogo} width={40} height={40} />, label: 'Java', color: '#ec111b' },
  { icon: <img src={csharplogo} width={40} height={40} />, label: 'C#', color: '#7e55b4' },
  { icon: <img src={pythonLogo} width={40} height={40} />, label: 'Python', color: '#306998' },
  { icon: <FaJs size={40} />, label: 'JavaScript', color: '#f0db4f' },
  { icon: <SiTypescript size={40} />, label: 'TypeScript', color: '#3178c6' }
];

const skillFrameworks = [
  { icon: <img src={aspnetLogo} width={40} height={40} />, label: 'ASP.NET', color: '#47a248' },
  { icon: <FaLaravel size={40} />, label: 'Laravel 10', color: '#cc2927' },
  { icon: <SiSpringboot size={40} />, label: 'Spring Boot', color: '#47a248' },
  { icon: <img src={vuejsLogo} width={40} height={40} />, label: 'Vue.js', color: '#47a248' },
  { icon: <img src={angularLogo} width={40} height={40} />, label: 'Angular', color: '#47a248' },
  { icon: <FaReact size={40} />, label: 'React', color: '#61dafb' },
  { icon: <SiJquery size={40} />, label: 'JQuery', color: '#2980b9' }
];

const skillDataBase = [
  { icon: <GrMysql size={40} />, label: 'MySQL', color: '#00758f' },
  { icon: <img src={sqlserverLogo} width={40} height={40} />, label: 'SQL Server', color: '#cc2927' },
  { icon: <SiMongodb size={40} />, label: 'MongoDB', color: '#47a248' }
];

const skillVersioningTools = [
  { icon: <FaGithub size={40} />, label: 'GitHub', color: '#333' },
  { icon: <FaGitlab size={40} />, label: 'GitLab', color: '#d83b01' },
  { icon: <VscAzure size={40} />, label: 'Azure', color: '#0078d4' }
];

const skillModelingAndDesingTools = [
  { icon: <img src={ibmrhapsodyLogo} width={40} height={40} />, label: 'IBM Rhapsody' },
  { icon: <img src={bizagiLogo} width={40} height={40} />, label: 'Bizagui' },
  { icon: <img src={starumlLogo} width={40} height={40} />, label: 'UML' },
  { icon: <img src={microsoftofficeLogo} width={40} height={40} />, label: 'Microsoft Office', color: '#d83b01' }
];

function Skills() {
  // Referencias para cada sección
  const titleRef = useRef(null);
  const markupRef = useRef(null);
  const languageRef = useRef(null);
  const frameworksRef = useRef(null);
  const databaseRef = useRef(null);
  const versioningRef = useRef(null);
  const modelingRef = useRef(null);

  // Estados de visibilidad para cada sección
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const isMarkupInView = useInView(markupRef, { once: false, amount: 0.3 });
  const isLanguageInView = useInView(languageRef, { once: false, amount: 0.3 });
  const isFrameworksInView = useInView(frameworksRef, { once: false, amount: 0.3 });
  const isDatabaseInView = useInView(databaseRef, { once: false, amount: 0.3 });
  const isVersioningInView = useInView(versioningRef, { once: false, amount: 0.3 });
  const isModelingInView = useInView(modelingRef, { once: false, amount: 0.3 });

  // Variantes de animación comunes
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

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
    <section id="skills" className={styles.container}>
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={isTitleInView ? "show" : "hidden"}
        variants={titleVariants}
      >
        <p>Tecnologías y Herramientas</p>
        <h1>Habilidades</h1>
      </motion.div>

      <motion.div
        ref={markupRef}
        initial="hidden"
        animate={isMarkupInView ? "show" : "hidden"}
        variants={containerVariants}
        className={styles.skillList}
      >
        {skillMarkupLanguage.map((skill, index) => (
          <motion.div 
            key={index} 
            className={styles.skillItem} 
            style={{ color: skill.color || 'inherit' }}
            variants={itemVariants}
          >
            {skill.icon}
            <p>{skill.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.hr
        initial="hidden"
        animate={isMarkupInView ? "show" : "hidden"}
        variants={dividerVariants}
      />

      <motion.div
        ref={languageRef}
        initial="hidden"
        animate={isLanguageInView ? "show" : "hidden"}
        variants={containerVariants}
        className={styles.skillList}
      >
        {skillLanguage.map((skill, index) => (
          <motion.div 
            key={index} 
            className={styles.skillItem} 
            style={{ color: skill.color || 'inherit' }}
            variants={itemVariants}
          >
            {skill.icon}
            <p>{skill.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.hr
        initial="hidden"
        animate={isLanguageInView ? "show" : "hidden"}
        variants={dividerVariants}
      />

      <motion.div
        ref={frameworksRef}
        initial="hidden"
        animate={isFrameworksInView ? "show" : "hidden"}
        variants={containerVariants}
        className={styles.skillList}
      >
        {skillFrameworks.map((skill, index) => (
          <motion.div 
            key={index} 
            className={styles.skillItem} 
            style={{ color: skill.color || 'inherit' }}
            variants={itemVariants}
          >
            {skill.icon}
            <p>{skill.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.hr
        initial="hidden"
        animate={isFrameworksInView ? "show" : "hidden"}
        variants={dividerVariants}
      />

      <motion.div
        ref={databaseRef}
        initial="hidden"
        animate={isDatabaseInView ? "show" : "hidden"}
        variants={containerVariants}
        className={styles.skillList}
      >
        {skillDataBase.map((skill, index) => (
          <motion.div 
            key={index} 
            className={styles.skillItem} 
            style={{ color: skill.color || 'inherit' }}
            variants={itemVariants}
          >
            {skill.icon}
            <p>{skill.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.hr
        initial="hidden"
        animate={isDatabaseInView ? "show" : "hidden"}
        variants={dividerVariants}
      />

      <motion.div
        ref={versioningRef}
        initial="hidden"
        animate={isVersioningInView ? "show" : "hidden"}
        variants={containerVariants}
        className={styles.skillList}
      >
        {skillVersioningTools.map((skill, index) => (
          <motion.div 
            key={index} 
            className={styles.skillItem} 
            style={{ color: skill.color || 'inherit' }}
            variants={itemVariants}
          >
            {skill.icon}
            <p>{skill.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.hr
        initial="hidden"
        animate={isVersioningInView ? "show" : "hidden"}
        variants={dividerVariants}
      />

      <motion.div
        ref={modelingRef}
        initial="hidden"
        animate={isModelingInView ? "show" : "hidden"}
        variants={containerVariants}
        className={styles.skillList}
      >
        {skillModelingAndDesingTools.map((skill, index) => (
          <motion.div 
            key={index} 
            className={styles.skillItem} 
            style={{ color: skill.color || 'inherit' }}
            variants={itemVariants}
          >
            {skill.icon}
            <p>{skill.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;