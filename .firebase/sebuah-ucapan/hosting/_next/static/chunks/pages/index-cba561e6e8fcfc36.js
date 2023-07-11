(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(2612)}])},2612:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return pages}});var jsx_runtime=__webpack_require__(5893),dom_motion=__webpack_require__(7910),styles_0={innerWidth:"2xl:max-w-[1280px] w-full",interWidth:"lg:w-[80%] w-[100%]",paddings:"sm:p-16 xs:p-8 px-6 py-12",yPaddings:"sm:py-16 xs:py-8 py-12",xPaddings:"sm:px-16 px-6",topPaddings:"sm:pt-16 xs:pt-8 pt-12",bottomPaddings:"sm:pb-16 xs:pb-8 pb-12",flexCenter:"flex justify-center items-center",flexStart:"flex justify-start items-start",flexEnd:"flex justify-end",navPadding:"pt-[98px]",heroHeading:"font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] text-white",heroDText:"md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]"};let navVariants={hidden:{opacity:0,y:-50,transition:{type:"spring",stiffness:300,damping:140}},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,delay:1}}},slideIn=(direction,type,delay,duration)=>({hidden:{x:"left"===direction?"-100%":"right"===direction?"100%":0,y:"up"===direction?"100%":"down"===direction?"100%":0},show:{x:0,y:0,transition:{type,delay,duration,ease:"easeOut"}}}),motion_staggerContainer=(staggerChildren,delayChildren)=>({hidden:{},show:{transition:{staggerChildren,delayChildren}}}),textVariant=delay=>({hidden:{y:50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay}}}),textContainer={hidden:{opacity:0},show:function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{opacity:1,transition:{staggerChildren:.1,delayChildren:.1*i}}}},textVariant2={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{type:"tween",ease:"easeIn"}}},motion_fadeIn=(direction,type,delay,duration)=>({hidden:{x:"left"===direction?100:"right"===direction?-100:0,y:"up"===direction?100:"down"===direction?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type,delay,duration,ease:"easeOut"}}}),planetVariants=direction=>({hidden:{x:"left"===direction?"-100%":"100%",rotate:120},show:{x:0,rotate:0,transition:{type:"spring",duration:1.8,delay:.5}}}),footerVariants={hidden:{opacity:0,y:50,transition:{type:"spring",stiffness:300,damping:140}},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,delay:.5}}},Navbar=()=>(0,jsx_runtime.jsxs)(dom_motion.E.nav,{variants:navVariants,initial:"hidden",whileInView:"show",className:"".concat(styles_0.xPaddings," py-8 relative"),children:[(0,jsx_runtime.jsx)("div",{className:"absolute w-[50%] inset-0 gradient-01"}),(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_0.innerWidth," mx-auto flex justify-between gap-8"),children:[(0,jsx_runtime.jsx)("img",{}),(0,jsx_runtime.jsxs)("h2",{className:"font-extrabold text-[24px] leading-[30.24px] text-white",children:["22",(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)("sup",{children:"nd"})})," aniz birthday!"]}),(0,jsx_runtime.jsx)("img",{})]})]}),CustomTexts_TypingText=param=>{let{title,textStyles}=param;return(0,jsx_runtime.jsx)(dom_motion.E.p,{variants:textContainer,className:"font-normal text-[14px] text-secondary-white ".concat(textStyles),children:Array.from(title).map((letter,index)=>(0,jsx_runtime.jsx)(dom_motion.E.span,{variants:textVariant2,children:" "===letter?"\xa0":letter},index))})},CustomTexts_TitleText=param=>{let{title,textStyles}=param;return(0,jsx_runtime.jsx)(dom_motion.E.h2,{variants:textVariant2,initial:"hidden",whileInView:"show",className:"mt-[8px] font-bold md:text-[64px] text-[40px] text-white ".concat(textStyles),children:title})},ExploreCard=param=>{let{id,imgUrl,title,index,active,handleClick}=param;return(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_fadeIn("right","spring",.5*index,.75),className:"relative ".concat(active===id?"lg:flex-[3.5] flex-[10]":"lg:flex-[0.5] flex-[2]"," flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer"),onClick:()=>handleClick(id),children:[(0,jsx_runtime.jsx)("img",{src:imgUrl,alt:"planet-04",className:"absolute w-full h-full object-cover rounded-[24px]"}),active!==id?(0,jsx_runtime.jsx)("h3",{className:"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]",children:title}):(0,jsx_runtime.jsx)("div",{className:"absolute bottom-0 p-8 flex justify-start w-full ",children:(0,jsx_runtime.jsx)("h2",{className:"mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white",children:title})})]})},Footer=()=>(0,jsx_runtime.jsxs)(dom_motion.E.footer,{variants:footerVariants,initial:"hidden",whileInView:"show",className:"".concat(styles_0.xPaddings," py-8 relative"),children:[(0,jsx_runtime.jsx)("div",{className:"footer-gradient"}),(0,jsx_runtime.jsx)("div",{className:"".concat(styles_0.innerWidth," mx-auto flex flex-col gap-8"),children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[(0,jsx_runtime.jsx)("div",{className:"mb-[50px] h-[2px] bg-white opacity-10"}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[(0,jsx_runtime.jsx)("h4",{className:"font-bold text-[18px] text-white",children:"Orange Cat 2023"}),(0,jsx_runtime.jsx)("p",{className:"font-bold text-[14px] text-white opacity-80",children:'Thanks to "The Best Friend"'}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("p",{className:"font-normal text-[14px] text-white opacity-50",children:["Inspired by"," ",(0,jsx_runtime.jsx)("a",{href:"https://www.youtube.com/@javascriptmastery",children:"JavaScript Mastery"})]}),(0,jsx_runtime.jsxs)("p",{className:"font-normal text-[14px] text-white opacity-50",children:["Image 1 by"," ",(0,jsx_runtime.jsx)("a",{href:"https://www.freepik.com/free-photo/view-adorable-3d-cats_45138596.htm#query=cat%20illustration%203d&position=15&from_view=search&track=ais",children:"Freepik"})]}),(0,jsx_runtime.jsxs)("p",{className:"font-normal text-[14px] text-white opacity-50",children:["Image 2 by"," ",(0,jsx_runtime.jsx)("a",{href:"https://www.freepik.com/free-photo/view-adorable-3d-cats_45138592.htm#query=cat%20illustration%203d&position=12&from_view=search&track=ais",children:"Freepik"})]}),(0,jsx_runtime.jsxs)("p",{className:"font-normal text-[14px] text-white opacity-50",children:["Image 3 by"," ",(0,jsx_runtime.jsx)("a",{href:"https://www.freepik.com/free-photo/view-adorable-3d-cat_45138549.htm#query=cat%203d&position=10&from_view=search&track=ais#position=10&query=cat%203d",children:"Freepik"})]})]})]})]})})]}),Hero=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.yPaddings," sm:pl-16 pl-6"),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-center items-center flex-col relative z-10",children:[(0,jsx_runtime.jsx)(dom_motion.E.h1,{variants:textVariant(1.1),className:styles_0.heroHeading,children:"Happy Birthday"}),(0,jsx_runtime.jsx)(dom_motion.E.div,{variants:textVariant(1.2),className:"flex flex-row justify-center items-center",children:(0,jsx_runtime.jsx)("h1",{className:styles_0.heroHeading,children:"Anizhaaa"})})]}),(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:slideIn("right","tween",.2,1),className:"relative w-full md:-mt-[20px] -mt-[12px]",children:[(0,jsx_runtime.jsx)("div",{className:"absolute w-full sm:h-[500px] h-[350px] hero-gradient rounded-[70px] z-[0] -top-[30px]"}),(0,jsx_runtime.jsx)("img",{src:"/catss.png",alt:"cats",className:"w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"})]})]})}),About=()=>(0,jsx_runtime.jsxs)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:[(0,jsx_runtime.jsx)("div",{className:"gradient-02 z-0"}),(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto ").concat(styles_0.flexCenter," flex-col"),children:[(0,jsx_runtime.jsx)(CustomTexts_TypingText,{title:"",textStyles:"text-center"}),(0,jsx_runtime.jsxs)(dom_motion.E.p,{variants:motion_fadeIn("up","tween",.2,1),className:"mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white",children:[(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"Selamat Ulang Tahun Aniz,"})," semoga di umur ke 22 kamu semakin bahagia, sehat selalu, dapat uang kaget 1T dan bertemu orang yang tepat buat kamu. Jangan lupa"," ",(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"selesaikan skripsimu"})," ","agar bisa segera pulang ke depok untuk bertemu keluarga tercinta dan teman-temanmu di sini."," ","Semoga ke depannya kamu bisa terus ",(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"membahagiakan"})," orang-orang sekitarmu."," ",(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"aamiinn"}),"."]})]})]});var react=__webpack_require__(7294);let exploreWorlds=[{id:"world-1",imgUrl:"/2019.jpeg",title:"2019"},{id:"world-2",imgUrl:"/2020.jpg",title:"2020"},{id:"world-3",imgUrl:"/2021.jpg",title:"2021"},{id:"world-4",imgUrl:"/2022.jpg",title:"2022"},{id:"world-5",imgUrl:"/2023.jpg",title:"2023"}],Explore=()=>{let[active,setActive]=(0,react.useState)("world-2");return(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings),id:"explore",children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsx)(CustomTexts_TypingText,{title:"Glowing Up!",textStyles:"text-center"}),(0,jsx_runtime.jsx)(CustomTexts_TitleText,{title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Getting more and more each year, ",(0,jsx_runtime.jsx)("br",{className:"md:block hidden"})," notice the difference..."]}),textStyles:"text-center"}),(0,jsx_runtime.jsx)("div",{className:"mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5",children:exploreWorlds.map((world,index)=>(0,jsx_runtime.jsx)(ExploreCard,{...world,index:index,active:active,handleClick:setActive},world.id))})]})})},GetStarted=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex lg:flex-row flex-col gap-8"),children:[(0,jsx_runtime.jsx)(dom_motion.E.div,{variants:planetVariants("left"),className:"flex-1 ".concat(styles_0.flexCenter),children:(0,jsx_runtime.jsx)("img",{src:"/illustration3.png",alt:"get-started",className:"w-[90%] h-[90%] object-contain"})}),(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_fadeIn("right","tween",.2,1),className:"flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative",children:[(0,jsx_runtime.jsx)("div",{className:"feedback-gradient"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("h4",{className:"font-bold sm:text-[28px] text-[20px] sm:leading-[40.32px] leading-[36.32px] text-white",children:"Orange Cat"})}),(0,jsx_runtime.jsx)("p",{className:"mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white",children:"“Anis tuh orangnya unik banget dah, sangking uniknya sampe kuliah aja jauh banget ke Gorontalo gokil ga tuh. pulang dong sini, si dinda nungguin lu ego kasian(gatau juga si gw). Happy Birthday yaa! \uD83E\uDD0D❤️\uD83D\uDD25”"})]})]})}),WhatsNew=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex lg:flex-row flex-col gap-8"),children:[(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_fadeIn("right","tween",.2,1),className:"flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative",children:[(0,jsx_runtime.jsx)("div",{className:"feedback-gradient"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("h4",{className:"font-bold sm:text-[28px] text-[20px] sm:leading-[40.32px] leading-[36.32px] text-white",children:"The Best Friend"})}),(0,jsx_runtime.jsx)("p",{className:"mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white",children:"“ asdfasdf asdf asdf asdf asdafasdf asdf asdf asdf asdf asdfasdfasdfasdf asdf asdf asdf asdfasdf  asdf asdf asd f asdfasdf asdfasdf anythingasdf asdfasd fasdfa asdfasd fasdfasdfasdf asdfasdfa sdfasdf asdfasdfasdf”"})]}),(0,jsx_runtime.jsx)(dom_motion.E.div,{variants:planetVariants("right"),className:"flex-1 ".concat(styles_0.flexCenter),children:(0,jsx_runtime.jsx)("img",{src:"/dinda.png",alt:"get-started",className:"w-[90%] h-[90%] object-contain"})})]})}),World=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsx)(CustomTexts_TypingText,{title:"a friend, the best friend",textStyles:"text-center"}),(0,jsx_runtime.jsx)(CustomTexts_TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:'"Through laughter and tears, adventures and misadventures, a best friend stands as an unwavering pillar of support, making every moment more meaningful"'}),textStyles:"text-center"}),(0,jsx_runtime.jsx)(dom_motion.E.div,{variants:motion_fadeIn("up","tween",.3,1),className:"relative mt-[68px] flex w-full h-full",children:(0,jsx_runtime.jsx)("img",{src:"/anisdinda2.jpg",alt:"foto anis dan dinda",className:" object-cover w-full h-full rounded-[50px]"})})]})}),Feedback=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings),children:(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex lg:flex-row flex-col gap-6"),children:[(0,jsx_runtime.jsxs)(dom_motion.E.div,{variants:motion_fadeIn("right","tween",.2,1),className:"flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative",children:[(0,jsx_runtime.jsx)("div",{className:"feedback-gradient"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h4",{className:"font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white",children:"A Message"}),(0,jsx_runtime.jsx)("p",{className:"mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white"})]}),(0,jsx_runtime.jsxs)("div",{className:"mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white",children:["“",(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"Of Course I Still Love You"})," (OCISLY) is an autonomous spaceport droneship (ASDS) that is operated out of the Port of Long Beach, California. Of Course I Still Love You was previously based in Florida from 2015 to 2021”",(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)("spa",{className:"text-[17px]",children:(0,jsx_runtime.jsx)("a",{href:"https://spacexfleet.com/of-course-i-still-love-you",children:"spacexfleet.com"})})]})]}),(0,jsx_runtime.jsx)(dom_motion.E.div,{variants:motion_fadeIn("left","tween",.2,1),className:"relative flex-1 flex justify-center items-center",children:(0,jsx_runtime.jsx)("img",{src:"https://spacexfleet.com/wp-content/uploads/2020/05/ocisly-1536x1086.jpg",alt:"planet-09",className:"w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"})})]})}),Page=()=>(0,jsx_runtime.jsxs)("div",{className:"bg-primary-black overflow-hidden",children:[(0,jsx_runtime.jsx)(Navbar,{}),(0,jsx_runtime.jsx)(Hero,{}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(About,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-03 z-0"}),(0,jsx_runtime.jsx)(Explore,{})]}),(0,jsx_runtime.jsx)(World,{}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(WhatsNew,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-04 z-0"}),(0,jsx_runtime.jsx)(GetStarted,{})]}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("div",{className:"gradient-04 z-0"}),(0,jsx_runtime.jsx)(Feedback,{})]}),(0,jsx_runtime.jsx)(Footer,{})]});var pages=Page}},function(__webpack_require__){__webpack_require__.O(0,[910,774,888,179],function(){return __webpack_require__(__webpack_require__.s=5557)}),_N_E=__webpack_require__.O()}]);