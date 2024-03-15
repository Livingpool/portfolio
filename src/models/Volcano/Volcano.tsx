import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./volcano.css";

// svg tutorial: https://jenkov.com/tutorials/svg/svg-viewport-view-box.html

export function Volcano() {
  // define colors
  const rightBase = "#443100";
  const leftBase = "#6A4000";
  const lavaRed = "#FF3B2F";
  const lavaYellow = "#FFE500";

  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const appear = {
    hidden: { opacity: 0, transition: { duration: 0.4 } },
    show: { opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);


  return (
    <motion.div
      className="volcano"
      ref={ref}
      animate={controls}
      initial="hidden"
    >
      <svg
        width="100%"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="volcano">
          <g id="base">
            <motion.path
              id="rightBase"
              d="M186.937 208H334L425.5 416H153L186.937 208Z"
              fill={rightBase}
              variants={appear}
              transition={{ delay: 0.4, ease: "easeIn" }}
            />
            <motion.path
              id="leftBase"
              d="M176 208H232L166.5 416H75L176 208Z"
              fill={leftBase}
              variants={appear}
              transition={{ delay: 0.2, ease: "easeIn" }}
            />
          </g>
          <motion.path
            id="lavaTop"
            d="M188.5 179H327.5L349 241L160 242L188.5 179Z"
            fill={lavaRed}
            variants={appear}
            transition={{ delay: 0.6 }}
          />
          <motion.g
            id="lavaMid"
            variants={appear}
            transition={{ delay: 0.8, duration: 0, ease: "easeInOut" }}
          >
            <path
              id="mid4"
              d="M324 223L342 222.5L359.5 266.5H324V223Z"
              fill={lavaRed}
            />
            <rect
              id="mid3"
              x="266" y="230" width="33" height="65"
              fill={lavaRed}
            />
            <rect
              id="mid2"
              x="208" y="225" width="33" height="57"
              fill={lavaRed}
            />
            <path
              id="mid1"
              d="M170 220.5H183V266H148L170 220.5Z"
              fill={lavaRed}
            />
          </motion.g>
          <motion.g
            id="lavaBottom"
            variants={appear}
            transition={{ delay: 0.8, duration: 0.2, ease: "easeInOut" }}
          >
            <path
              id="bottom4"
              d="M359.5 266C359.5 273.456 349.232 281.5 341.5 281.5C333.768 281.5 324 272.956 324 265.5C324 258.044 325.768 246 333.5 246C341.232 246 357 258.5 359.5 266Z"
              fill={lavaRed}
            />
            <g id="bottom2">
              <path
                d="M241 281C241 290.389 233.613 298 224.5 298C215.387 298 208 290.389 208 281C208 271.611 215.387 264 224.5 264C233.613 264 241 271.611 241 281Z"
                fill={lavaRed}
              />
              <path
                d="M299 294C299 303.389 291.613 311 282.5 311C273.387 311 266 303.389 266 294C266 284.611 273.387 277 282.5 277C291.613 277 299 284.611 299 294Z"
                fill={lavaRed}
              />
            </g>
            <path
              id="bottom1"
              d="M183 266C183 275.941 175.192 281 165.251 281C155.31 281 148 275.941 148 266C155.5 254 160.559 243.5 170.5 243.5C180.441 243.5 183 256.059 183 266Z"
              fill={lavaRed}
            />
          </motion.g>
          <motion.g
            id="baseCircle"
            variants={appear}
            transition={{ delay: 0.8, ease: "easeInOut" }}
          >
            <path
              id="circle3"
              d="M324 242C324 248.627 318.404 254 311.5 254C304.596 254 299 248.627 299 242C299 235.373 304.596 230 311.5 230C318.404 230 324 235.373 324 242Z"
              fill="#443100"
            />
            <path
              id="circle2"
              d="M266 243C266 249.627 260.404 255 253.5 255C246.596 255 241 249.627 241 243C241 236.373 246.596 231 253.5 231C260.404 231 266 236.373 266 243Z"
              fill="#443100"
            />
            <path
              id="circle1"
              d="M208 242C208 248.627 202.404 254 195.5 254C188.596 254 183 248.627 183 242C183 235.373 188.596 230 195.5 230C202.404 230 208 235.373 208 242Z"
              fill="#6A4000"
            />
          </motion.g>
          <motion.g
            id="yellowLava"
            variants={appear}
            transition={{ delay: 1.2, duration: 0.4, ease: "easeInOut" }}
          >
            <path
              id="base_2"
              d="M188.5 179H327.5V193H188.5V179Z"
              fill={lavaYellow}
            />
            <path
              id="lava5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M327.486 187H310V207.972C310 207.984 310 207.996 310 208.008C310 212.618 313.881 215.5 318.5 215.5C323.119 215.5 327.5 212.618 327.5 208.008C327.5 207.863 327.495 207.72 327.486 207.578V187Z"
              fill={lavaYellow}
            />
            <path
              id="lava4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M294 188H277V209H277.007C277.002 209.115 277 209.231 277 209.348C277 213.958 281.01 216.5 285.5 216.5C289.99 216.5 294 213.61 294 209V188Z"
              fill={lavaYellow}
            />
            <path
              id="lava3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M264 184H247V205H247.007C247.002 205.115 247 205.231 247 205.348C247 209.958 251.01 212.5 255.5 212.5C259.99 212.5 264 209.61 264 205V184Z"
              fill={lavaYellow}
            />
            <path
              id="lava2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M235 179H218V200H218.007C218.002 200.115 218 200.231 218 200.348C218 204.958 222.01 207.5 226.5 207.5C230.99 207.5 235 204.61 235 200V179Z"
              fill={lavaYellow}
            />
            <path
              id="lava1"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M206.5 193H188.5V214C188.5 218.61 193.51 221.5 198 221.5C202.49 221.5 206.5 218.61 206.5 214V193Z"
              fill={lavaYellow}
            />
          </motion.g>
          <motion.g
            id="redBaseCircle"
            variants={appear}
            transition={{ delay: 1.2, ease: "easeInOut" }}
          >
            <path
              id="Ellipse 4"
              d="M310 193C310 196.314 306.418 199 302 199C297.582 199 294 196.314 294 193C294 189.686 297.582 187 302 187C306.418 187 310 189.686 310 193Z"
              fill={lavaRed}
            />
            <path
              id="Ellipse 3"
              d="M277 193.5C277 196.538 274.09 199 270.5 199C266.91 199 264 196.538 264 193.5C264 190.462 266.91 188 270.5 188C274.09 188 277 190.462 277 193.5Z"
              fill={lavaRed}
            />
            <path
              id="Ellipse 2"
              d="M247 193.5C247 196.538 244.314 199 241 199C237.686 199 235 196.538 235 193.5C235 190.462 237.686 188 241 188C244.314 188 247 190.462 247 193.5Z"
              fill={lavaRed}
            />
            <path
              id="Ellipse 1"
              d="M218 193.5C218 196.538 215.538 199 212.5 199C209.462 199 206.5 196.538 206.5 193.5C206.5 190.462 209.462 188 212.5 188C215.538 188 218 190.462 218 193.5Z"
              fill={lavaRed}
            />
          </motion.g>
          <g id="yellowLavaBubbles">
            <path
              id="Ellipse 10"
              d="M253 97C253 104.18 247.18 110 240 110C232.82 110 227 104.18 227 97C227 89.8203 232.82 84 240 84C247.18 84 253 89.8203 253 97Z"
              fill={lavaYellow}
              className={inView ? "ellipse-10" : ""}
            />
            <path
              id="Ellipse 9"
              d="M286 123.5C286 132.06 279.06 139 270.5 139C261.94 139 255 132.06 255 123.5C255 114.94 261.94 108 270.5 108C279.06 108 286 114.94 286 123.5Z"
              fill={lavaYellow}
              className={inView ? "ellipse-9" : ""}
            />
            <path
              id="Ellipse 8"
              d="M220 129.5C220 134.747 215.747 139 210.5 139C205.253 139 201 134.747 201 129.5C201 124.253 205.253 120 210.5 120C215.747 120 220 124.253 220 129.5Z"
              fill={lavaYellow}
              className={inView ? "ellipse-8" : ""}
            />
            <motion.path
              id="Ellipse 7"
              d="M315 161C315 170.389 307.389 178 298 178C288.611 178 281 170.389 281 161C281 151.611 288.611 144 298 144C307.389 144 315 151.611 315 161Z"
              fill={lavaYellow}
              variants={appear}
              transition={{ delay: 1.9, ease: "easeInOut" }}
            />
            <motion.path
              id="Ellipse 6"
              d="M308 175C308 181.627 302.404 187 295.5 187C288.596 187 283 181.627 283 175C283 168.373 288.596 163 295.5 163C302.404 163 308 168.373 308 175Z"
              fill={lavaYellow}
              variants={appear}
              transition={{ delay: 1.8, ease: "easeInOut" }}
            />
            <motion.path
              id="Ellipse 5"
              d="M330 170.5C330 179.06 323.06 186 314.5 186C305.94 186 299 179.06 299 170.5C299 161.94 305.94 155 314.5 155C323.06 155 330 161.94 330 170.5Z"
              fill={lavaYellow}
              variants={appear}
              transition={{ delay: 1.7, ease: "easeInOut" }}
            />
            <motion.path
              id="Ellipse 4_2"
              d="M294 174C294 181.18 288.18 187 281 187C273.82 187 268 181.18 268 174C268 166.82 273.82 161 281 161C288.18 161 294 166.82 294 174Z"
              fill={lavaYellow}
              variants={appear}
              transition={{ delay: 1.6, ease: "easeInOut" }}
            />
            <motion.path
              id="Ellipse 3_2"
              d="M271 179C271 183.418 267.418 187 263 187C258.582 187 255 183.418 255 179C255 174.582 258.582 171 263 171C267.418 171 271 174.582 271 179Z"
              fill={lavaYellow}
              variants={appear}
              transition={{ delay: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              id="Ellipse 2_2"
              d="M241 174C241 181.732 234.732 188 227 188C219.268 188 213 181.732 213 174C213 166.268 219.268 160 227 160C234.732 160 241 166.268 241 174Z" 
              fill={lavaYellow}
              variants={appear}
              transition={{ delay: 1.4, ease: "easeInOut" }}
            />
            <motion.path
              id="Ellipse 1_2"
              d="M210 182.5C210 187.194 205.971 191 201 191C196.029 191 192 187.194 192 182.5C192 177.806 196.029 174 201 174C205.971 174 210 177.806 210 182.5Z"
              fill={lavaYellow}
              variants={appear}
              transition={{ delay: 1.3, ease: "easeInOut" }}
            />
          </g>
        </g>
      </svg>
    </motion.div>
  );
}
