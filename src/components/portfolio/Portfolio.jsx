import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'React commerce',
    img: 'https://images.pexels.com/photos/23105934/pexels-photo-23105934/free-photo-of-a-photo-of-the-ocean-with-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias iure assumenda obcaecati rem tempore cupiditate qui voluptate possimus facere quae corporis cumque magnam ut asperiores autem sed dolores, excepturi deleniti',
  },
  {
    id: 2,
    title: 'ReNext.js act commerce',
    img: 'https://images.pexels.com/photos/20836361/pexels-photo-20836361/free-photo-of-a-person-holding-a-cup-of-coffee-in-bed.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias iure assumenda obcaecati rem tempore cupiditate qui voluptate possimus facere quae corporis cumque magnam ut asperiores autem sed dolores, excepturi deleniti',
  },
  {
    id: 3,
    title: 'Vanila javascript',
    img: 'https://images.pexels.com/photos/24374036/pexels-photo-24374036/free-photo-of-citroen-2cv.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias iure assumenda obcaecati rem tempore cupiditate qui voluptate possimus facere quae corporis cumque magnam ut asperiores autem sed dolores, excepturi deleniti',
  },
  {
    id: 4,
    title: 'Music App',
    img: 'https://images.pexels.com/photos/11551181/pexels-photo-11551181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias iure assumenda obcaecati rem tempore cupiditate qui voluptate possimus facere quae corporis cumque magnam ut asperiores autem sed dolores, excepturi deleniti',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Feature Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
