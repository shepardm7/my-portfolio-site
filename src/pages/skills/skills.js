//region imports
// languages
import htmlCssJsLogo from '../../assets/skills/html-css-js.png';
import javaLogo from '../../assets/skills/java.png';
import phpLogo from '../../assets/skills/php.png';
import sassLogo from '../../assets/skills/sass.png';
import kotlinLogo from '../../assets/skills/kotlin.png';
import pythonLogo from '../../assets/skills/python.png';

// frontend
import reactLogo from '../../assets/skills/react.jpg';
import jqueryLogo from '../../assets/skills/jquery.png';
import bulmaLogo from '../../assets/skills/bulma.png';
import bootstrapLogo from '../../assets/skills/bootstrap.png';

// backend
import nodeLogo from '../../assets/skills/node.jpg';
import springLogo from '../../assets/skills/spring.png';
import flaskLogo from '../../assets/skills/flask.png';

// database
import mongodbLogo from '../../assets/skills/mongodb.png';
import mysqlLogo from '../../assets/skills/mysql.png';

// mobile
import androidLogo from '../../assets/skills/android.png';

// others
import gitLogo from '../../assets/skills/git.png';
import gradleLogo from '../../assets/skills/gradle.jpg';
import mavenLogo from '../../assets/skills/maven.png';
import photoshopLogo from '../../assets/skills/photoshop.png';
import webpackLogo from '../../assets/skills/webpack.png';
//endregion

// fontawesome
// import {} from '@fortawesome/react-fontawesome';


const Skills = [
	{
		id: 1,
		title: 'Languages',
		visible: true,
		iconClass: 'fas fa-code',
		items: [
			{ id: 1, title: 'HTML, CSS, JS', image: htmlCssJsLogo },
			{ id: 2, title: 'Java', image: javaLogo },
			{ id: 3, title: 'Kotlin', image: kotlinLogo },
			{ id: 4, title: 'PHP', image: phpLogo },
			{ id: 5, title: 'Sass', image: sassLogo },
			{ id: 6, title: 'Python', image: pythonLogo }
		]
	},
	{
		id: 2,
		title: 'Frontend',
		visible: false,
		iconClass: 'fas fa-laptop-code',
		items: [
			{ id: 1, title: 'React', image: reactLogo },
			{ id: 2, title: 'jQuery', image: jqueryLogo },
			{ id: 3, title: 'Bootstrap', image: bootstrapLogo },
			{ id: 4, title: 'Bulma', image: bulmaLogo },
		]
	},
	{
		id: 3,
		title: 'Backend',
		visible: false,
		iconClass: 'fas fa-server',
		items: [
			{ id: 1, title: 'NodeJS', image: nodeLogo },
			{ id: 2, title: 'Spring', image: springLogo },
			{ id: 3, title: 'Flask', image: flaskLogo }
		]
	},
	{
		id: 4,
		title: 'Database',
		visible: false,
		iconClass: 'fas fa-database',
		items: [
			{ id: 1, title: 'MySQL', image: mysqlLogo },
			{ id: 2, title: 'MongoDB', image: mongodbLogo }
		]
	},
	{
		id: 5,
		title: 'Mobile',
		visible: false,
		iconClass: 'fas fa-mobile-alt',
		items: [
			{ id: 1, title: 'Android', image: androidLogo }
		]
	},
	{
		id: 6,
		title: 'Others',
		visible: false,
		iconClass: 'fas fa-terminal',
		items: [
			{ id: 1, title: 'Git', image: gitLogo },
			{ id: 2, title: 'Maven', image: mavenLogo },
			{ id: 3, title: 'Gradle', image: gradleLogo },
			{ id: 4, title: 'Webpack', image: webpackLogo },
			{ id: 5, title: 'Photoshop', image: photoshopLogo },
		]
	}
];

export const resetSkillsState = () => {
	Skills.forEach((skill) => {
		skill.visible = false;
	});
	Skills[0].visible = true;
};

export default Skills;
