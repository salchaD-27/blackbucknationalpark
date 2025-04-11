"use client"
import {Loader} from "@googlemaps/js-api-loader"
import { init } from "next/dist/compiled/webpack/webpack"
import {useEffect, useRef} from 'react'

export default function Maps1(){
    const mapRef=useRef<HTMLDivElement>(null)
    
    useEffect(()=>{
        const initMap = async ()=>{
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "weekly"
            })
            const {Map}= await loader.importLibrary('maps')
            const position = {lat: 43.642693, lng: -79.3871189}
            // map options
            const mapOptions: google.maps.MapOptions = {center: position, zoom: 17, mapId: 'HOME1_MAPID'}
            // map setup
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
        }
        initMap()
    }, []);

    return(
        <>
            {/* <div ref={mapRef} className="h-full w-full text-black"></div> */}
            <div className="h-full w-full text-black">Maps1</div>
        </>
    );
}