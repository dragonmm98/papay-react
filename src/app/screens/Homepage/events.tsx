import { Box, Container, Stack } from "@mui/material";
import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Navigation,Pagination} from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);


export function Events () {
    const Events =[
        {
            title:"Welcome to Black Beer",
            desc: "New Taste, New style, New Dish",
            author: "Jeff Bezos",
            date: "2023.11.18",
            location: "New York City",
            img: "/restaurant/mamares.jpg",
        },
        {
            title: "Big Sale in our Resto",
            desc: "only weekends for pizza lovers",
            author: "JackMA Resto",
            location: "New York city 16th street",
            img: "/restaurant/mamares.jpg",
        },
        {
            title: "Feel real taste with us",
            desc: "Use promocode and get 50% discount",
            author: "Chicken Mansion",
            date: "2023.11.26",
            location: "New York 16th street",
            img: "/restaurant/mamares.jpg"

        },
        {
            title: "New Foods in Our city",
            desc: "Be the part of our bright future",
            author: "New York 16th street",
            date: "2023.11.26",
            location: "New York 16th street",
            img: "/restaurant/mamares.jpg"   
        },
    ];
    return (
        <div className="events_frame">
            <Container sx={{overflow: "hidden"}}>
                <Stack className="events_main">
                    <Box className="events_text">
                        <span className="category_title">Hodisalar</span>
                    </Box>
                    <Box className="prev_next_frame">
                        <img 
                        src="/icons/arrow-right.svg" 
                        className="swiper-button-prev" alt=""
                        style={{transform:"rotate(180deg)"}}/>
                        <div className="dot_frame_pagination swiper-pagination"></div>
                        <img 
                        src="/icons/arrow-left.svg" 
                        className="swiper-button-next"
                        style={{transform:"rotate(180deg)"}} alt=""/>
                    </Box>
                    <Swiper 
                    className={"events_info swiper-wrapper"}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={30}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}>
                        {Events.map((value,numver) =>{
                            return (
                                <SwiperSlide className="events_info_frame">
                                <div className="events_img">
                                    <img src={value.img} className="events_img" alt=""/>
                                </div>
                                <Box className="events_desc">
                                    <Box className="events_bott">
                                    <Box className="bott_left">
                                        <div className="event_title_speaker">
                                            <strong>{value.title}</strong>
                                            <div className="event_organizator">
                                                <img src="/icons/speaker.svg"
                                                alt=""
                                                style={{width:"20px", marginRight:"10px"}}/>
                                                <p className="spec_text_author">{value.author}</p>
                                            </div>
                                        </div>
                                        <p
                                        className="text_desc"
                                        style={{marginTop:"10px"}}>
                                           {""}
                                           {value.desc}{""}
                                        </p>
                                        <div 
                                        className="bott_info"
                                        style={{marginTop:"10px"}}>
                                            <div className="bott_info_main">
                                                <img
                                                src="/icons/calendar.svg"
                                                alt=""
                                                style={{marginRight:"10px"}}/>
                                                {value.date}
                                            </div>
                                            <div className="bott_info_main">
                                                <img
                                                src="/icons/location.svg"
                                                alt=""
                                                style={{marginRight: "10px"}}/>
                                                {value.location}
                                            </div>
                                        </div>
                                    </Box>
                                    </Box>
                                </Box>
                                </SwiperSlide>
                            );
                        })}

                    </Swiper>
                </Stack>
            </Container>
        </div>
    )
}