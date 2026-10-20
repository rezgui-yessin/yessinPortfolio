import type { IconType } from 'react-icons';
import { FaJava, FaGithub, FaAws } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa6';
import {
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiSpringboot,
  SiSpringsecurity,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiKeycloak,
  SiJsonwebtokens,
  SiKubernetes,
  SiPostman,
  SiIntellijidea,
  SiPython,
  SiNginx,
  SiLinux,
} from 'react-icons/si';
import { TbCloud } from 'react-icons/tb';

export const iconMap: Record<string, IconType> = {
  java: FaJava,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: FaCss3Alt,
  angular: SiAngular,
  springboot: SiSpringboot,
  springsecurity: SiSpringsecurity,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  docker: SiDocker,
  githubactions: SiGithubactions,
  git: SiGit,
  github: FaGithub,
  keycloak: SiKeycloak,
  jwt: SiJsonwebtokens,
  kubernetes: SiKubernetes,
  postman: SiPostman,
  intellij: SiIntellijidea,
  python: SiPython,
  nginx: SiNginx,
  linux: SiLinux,
  aws: FaAws,
  cloud: TbCloud,
};

export function getIcon(key: string): IconType {
  return iconMap[key] ?? TbCloud;
}
