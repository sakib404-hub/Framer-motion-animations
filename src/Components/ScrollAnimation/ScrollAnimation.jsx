import React from 'react';
import { motion, useScroll } from 'motion/react';

const ScrollAnimation = () => {
    const scrollYProgress = useScroll().scrollYProgress;
    console.log(scrollYProgress);

    return (
        <div className='min-h-100 w-full border relative'>
            <h2 className='text-2xl font-semibold text-center'>Shakib Coding School!</h2>
            <motion.div
                style={{
                    scaleX: scrollYProgress
                }}
                className='bg-red-500 origin-left w-full h-5 sticky top-0 z-10000'></motion.div>
            <p className='text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta debitis odit sunt illo veniam sequi eius assumenda impedit earum, nulla fugit, ab consequatur accusantium esse dolores porro, nesciunt neque? Voluptatibus asperiores veniam alias vitae, porro accusamus distinctio excepturi aliquam enim minima hic fuga illum architecto sapiente perferendis aliquid aperiam a molestiae. Quas molestiae qui enim dicta amet, minus itaque maiores exercitationem alias corporis sequi impedit nihil mollitia, ex sit reiciendis omnis. Obcaecati praesentium
                <br />
                <br />
                perspiciatis debitis labore reiciendis mollitia veniam distinctio, harum sequi quidem aperiam quaerat vero, voluptatum odio minima aut, iusto neque explicabo! Ipsa expedita voluptates deserunt, reiciendis ducimus quasi sapiente magni ab quos animi libero maiores natus exercitationem, consequatur reprehenderit. Tempore saepe vero nisi repudiandae eaque doloremque atque accusantium eum? Odio eum quam est possimus ipsam
                <br />
                <br />
                labore perferendis veritatis nesciunt officia, reprehenderit voluptatem ducimus temporibus ipsa cupiditate repellat minus tenetur necessitatibus expedita esse, voluptatibus magni. Quia tempore natus nesciunt perspiciatis voluptatem dolorum doloremque dolore non voluptate quae. Quisquam id, perspiciatis accusamus doloremque eum ea, libero amet voluptate esse provident, ad dolorem? A veritatis, quo reprehenderit nobis repellendus odit officiis vel minima! Aliquid similique officia atque, cumque ipsum sunt, ea tenetur numquam omnis quod cupiditate nihil quas odio laborum. Numquam.
                <br />
                <br />
                labore perferendis veritatis nesciunt officia, reprehenderit voluptatem ducimus temporibus ipsa cupiditate repellat minus tenetur necessitatibus expedita esse, voluptatibus magni. Quia tempore natus nesciunt perspiciatis voluptatem dolorum doloremque dolore non voluptate quae. Quisquam id, perspiciatis accusamus doloremque eum ea, libero amet voluptate esse provident, ad dolorem? A veritatis, quo reprehenderit nobis repellendus odit officiis vel minima! Aliquid similique officia atque, cumque ipsum sunt, ea tenetur numquam omnis quod cupiditate nihil quas odio laborum. Numquam.
                <br />
                <br />
                labore perferendis veritatis nesciunt officia, reprehenderit voluptatem ducimus temporibus ipsa cupiditate repellat minus tenetur necessitatibus expedita esse, voluptatibus magni. Quia tempore natus nesciunt perspiciatis voluptatem dolorum doloremque dolore non voluptate quae. Quisquam id, perspiciatis accusamus doloremque eum ea, libero amet voluptate esse provident, ad dolorem? A veritatis, quo reprehenderit nobis repellendus odit officiis vel minima! Aliquid similique officia atque, cumque ipsum sunt, ea tenetur numquam omnis quod cupiditate nihil quas odio laborum. Numquam.
                <br />
                <br />
                labore perferendis veritatis nesciunt officia, reprehenderit voluptatem ducimus temporibus ipsa cupiditate repellat minus tenetur necessitatibus expedita esse, voluptatibus magni. Quia tempore natus nesciunt perspiciatis voluptatem dolorum doloremque dolore non voluptate quae. Quisquam id, perspiciatis accusamus doloremque eum ea, libero amet voluptate esse provident, ad dolorem? A veritatis, quo reprehenderit nobis repellendus odit officiis vel minima! Aliquid similique officia atque, cumque ipsum sunt, ea tenetur numquam omnis quod cupiditate nihil quas odio laborum. Numquam.
                <br />
                <br />
                labore perferendis veritatis nesciunt officia, reprehenderit voluptatem ducimus temporibus ipsa cupiditate repellat minus tenetur necessitatibus expedita esse, voluptatibus magni. Quia tempore natus nesciunt perspiciatis voluptatem dolorum doloremque dolore non voluptate quae. Quisquam id, perspiciatis accusamus doloremque eum ea, libero amet voluptate esse provident, ad dolorem? A veritatis, quo reprehenderit nobis repellendus odit officiis vel minima! Aliquid similique officia atque, cumque ipsum sunt, ea tenetur numquam omnis quod cupiditate nihil quas odio laborum. Numquam.
                <br />
                <br />
                labore perferendis veritatis nesciunt officia, reprehenderit voluptatem ducimus temporibus ipsa cupiditate repellat minus tenetur necessitatibus expedita esse, voluptatibus magni. Quia tempore natus nesciunt perspiciatis voluptatem dolorum doloremque dolore non voluptate quae. Quisquam id, perspiciatis accusamus doloremque eum ea, libero amet voluptate esse provident, ad dolorem? A veritatis, quo reprehenderit nobis repellendus odit officiis vel minima! Aliquid similique officia atque, cumque ipsum sunt, ea tenetur numquam omnis quod cupiditate nihil quas odio laborum. Numquam.
            </p>
        </div>
    );
};

export default ScrollAnimation;