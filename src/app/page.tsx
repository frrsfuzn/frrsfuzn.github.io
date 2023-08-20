import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineTwitter,
} from "react-icons/ai";
export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="lg:flex lg:justify-between lg:gap-12 min-lg:px-5">
        <header className="lg:w-2/5 lg:sticky top-0 max-h-screen lg:py-20 flex flex-col justify-between max-lg:mb-20">
          <div className="mb-10">
            <div className="w-full h-60 bg-slate-700" />
            <div className="flex relative h-16 mb-5 pr-10 justify-end items-center">
              <div className="w-32 h-32 rounded-full bg-zinc-500 absolute left-10 -top-16"></div>
              <Link
                href="https://twitter.com/frrsfuzn"
                target="_blank"
                className="bg-nepal text-pampas hover:drop-shadow-md hover:font-semibold rounded-3xl h-10 w-28 px-3 flex justify-evenly items-center"
              >
                <AiOutlineTwitter className="text-xl" />
                <span className="text-lg">Follow</span>
              </Link>
            </div>
            <div className="px-10">
              <h1 className="text-4xl text-tabasco font-bold mb-5">
                Mochamad Farras Fauzan
              </h1>
              <p className="">
                a Software Engineer who interested in Frontend Technology.
                Experienced in ReactJS, React Native, NextJS, JavaScript,
                TypeScript, ReasonML, GraphQL, Redux, CSS.
              </p>
            </div>
          </div>
          <div className="px-10">
            <ul className="flex items-center">
              <li className="mr-4">
                <Link href="https://github.com/frrsfuzn" target="_blank">
                  <AiFillGithub className="text-3xl text-nepal" />
                </Link>
              </li>
              <li className="mr-4">
                <Link href="https://github.com/frrsfuzn" target="_blank">
                  <AiFillLinkedin className="text-3xl text-nepal" />
                </Link>
              </li>
              <li className="mr-4">
                <Link href="https://github.com/frrsfuzn" target="_blank">
                  <AiFillInstagram className="text-3xl text-nepal" />
                </Link>
              </li>
              <li className="mr-4">
                <Link href="https://github.com/frrsfuzn" target="_blank">
                  <AiFillTwitterSquare className="text-3xl text-nepal" />
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <main className="lg:w-3/5 lg:pt-20 max-lg:px-10">
          <section id="about" className="pb-10">
            <h2 className="text-3xl">About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              congue placerat orci. Duis id lacus orci. Aenean eget tempus odio.
              Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim.
              Curabitur in elit urna. Nulla non fringilla dui. Suspendisse vitae
              tempor arcu. Donec consectetur quam id sem bibendum sollicitudin.
              Maecenas ex justo, efficitur ut faucibus vel, maximus sed mi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              sagittis sapien. Ut vitae sodales ligula, ac elementum justo.
              Phasellus ut aliquet dolor, eu malesuada lacus. Sed feugiat sed
              sem id rhoncus. Nullam commodo felis mi, vitae dapibus velit
              malesuada eu.
            </p>
            <p>
              Phasellus sed elementum enim. Mauris vel aliquam nulla. Praesent
              nec tincidunt felis. Nulla fermentum eros augue, fermentum congue
              quam dignissim id. Duis consectetur metus et tellus convallis
              auctor. Ut quam eros, tempor id iaculis nec, tincidunt non lorem.
              Sed quis sem vitae lectus placerat tincidunt. Maecenas aliquam,
              lorem sit amet feugiat laoreet, lectus nisi congue neque, id
              ultrices magna ipsum a tellus. Suspendisse condimentum vulputate
              vulputate. Integer tortor ex, venenatis vel tristique vitae,
              vehicula ac enim. Vestibulum molestie eros sapien, vitae sodales
              massa interdum nec. Vivamus sollicitudin, odio ac pharetra
              tristique, dui arcu commodo dui, in tempor velit sapien in velit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla mollis, erat et ultricies
              placerat, nunc lacus volutpat urna, sed eleifend sapien libero
              posuere nisl.
            </p>
          </section>
          <section id="about" className="pb-10">
            <h2 className="text-3xl">Experiences</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              congue placerat orci. Duis id lacus orci. Aenean eget tempus odio.
              Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim.
              Curabitur in elit urna. Nulla non fringilla dui. Suspendisse vitae
              tempor arcu. Donec consectetur quam id sem bibendum sollicitudin.
              Maecenas ex justo, efficitur ut faucibus vel, maximus sed mi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              sagittis sapien. Ut vitae sodales ligula, ac elementum justo.
              Phasellus ut aliquet dolor, eu malesuada lacus. Sed feugiat sed
              sem id rhoncus. Nullam commodo felis mi, vitae dapibus velit
              malesuada eu.
            </p>
            <p>
              Phasellus sed elementum enim. Mauris vel aliquam nulla. Praesent
              nec tincidunt felis. Nulla fermentum eros augue, fermentum congue
              quam dignissim id. Duis consectetur metus et tellus convallis
              auctor. Ut quam eros, tempor id iaculis nec, tincidunt non lorem.
              Sed quis sem vitae lectus placerat tincidunt. Maecenas aliquam,
              lorem sit amet feugiat laoreet, lectus nisi congue neque, id
              ultrices magna ipsum a tellus. Suspendisse condimentum vulputate
              vulputate. Integer tortor ex, venenatis vel tristique vitae,
              vehicula ac enim. Vestibulum molestie eros sapien, vitae sodales
              massa interdum nec. Vivamus sollicitudin, odio ac pharetra
              tristique, dui arcu commodo dui, in tempor velit sapien in velit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla mollis, erat et ultricies
              placerat, nunc lacus volutpat urna, sed eleifend sapien libero
              posuere nisl.
            </p>
          </section>
          <section id="about" className="pb-10">
            <h2 className="text-3xl">Blogs</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              congue placerat orci. Duis id lacus orci. Aenean eget tempus odio.
              Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim.
              Curabitur in elit urna. Nulla non fringilla dui. Suspendisse vitae
              tempor arcu. Donec consectetur quam id sem bibendum sollicitudin.
              Maecenas ex justo, efficitur ut faucibus vel, maximus sed mi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              sagittis sapien. Ut vitae sodales ligula, ac elementum justo.
              Phasellus ut aliquet dolor, eu malesuada lacus. Sed feugiat sed
              sem id rhoncus. Nullam commodo felis mi, vitae dapibus velit
              malesuada eu.
            </p>
            <p>
              Phasellus sed elementum enim. Mauris vel aliquam nulla. Praesent
              nec tincidunt felis. Nulla fermentum eros augue, fermentum congue
              quam dignissim id. Duis consectetur metus et tellus convallis
              auctor. Ut quam eros, tempor id iaculis nec, tincidunt non lorem.
              Sed quis sem vitae lectus placerat tincidunt. Maecenas aliquam,
              lorem sit amet feugiat laoreet, lectus nisi congue neque, id
              ultrices magna ipsum a tellus. Suspendisse condimentum vulputate
              vulputate. Integer tortor ex, venenatis vel tristique vitae,
              vehicula ac enim. Vestibulum molestie eros sapien, vitae sodales
              massa interdum nec. Vivamus sollicitudin, odio ac pharetra
              tristique, dui arcu commodo dui, in tempor velit sapien in velit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla mollis, erat et ultricies
              placerat, nunc lacus volutpat urna, sed eleifend sapien libero
              posuere nisl.
            </p>
          </section>
          <section id="about" className="pb-10">
            <h2 className="text-3xl">Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              congue placerat orci. Duis id lacus orci. Aenean eget tempus odio.
              Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim.
              Curabitur in elit urna. Nulla non fringilla dui. Suspendisse vitae
              tempor arcu. Donec consectetur quam id sem bibendum sollicitudin.
              Maecenas ex justo, efficitur ut faucibus vel, maximus sed mi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              sagittis sapien. Ut vitae sodales ligula, ac elementum justo.
              Phasellus ut aliquet dolor, eu malesuada lacus. Sed feugiat sed
              sem id rhoncus. Nullam commodo felis mi, vitae dapibus velit
              malesuada eu.
            </p>
            <p>
              Phasellus sed elementum enim. Mauris vel aliquam nulla. Praesent
              nec tincidunt felis. Nulla fermentum eros augue, fermentum congue
              quam dignissim id. Duis consectetur metus et tellus convallis
              auctor. Ut quam eros, tempor id iaculis nec, tincidunt non lorem.
              Sed quis sem vitae lectus placerat tincidunt. Maecenas aliquam,
              lorem sit amet feugiat laoreet, lectus nisi congue neque, id
              ultrices magna ipsum a tellus. Suspendisse condimentum vulputate
              vulputate. Integer tortor ex, venenatis vel tristique vitae,
              vehicula ac enim. Vestibulum molestie eros sapien, vitae sodales
              massa interdum nec. Vivamus sollicitudin, odio ac pharetra
              tristique, dui arcu commodo dui, in tempor velit sapien in velit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla mollis, erat et ultricies
              placerat, nunc lacus volutpat urna, sed eleifend sapien libero
              posuere nisl.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
