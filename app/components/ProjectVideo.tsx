"use client";

import { useEffect, useRef, useState } from "react";

export default function ProjectVideo({
  src,
  altText,
  clipSides = false,
  zoom = 1,
  zoomY = 0,
  zoomTop = 0,
  zoomOutPx = 0,
  sound = false,
  audioSrc,
  loop = true,
  hero = false,
  sectionFrame = false,
}: {
  src: string;
  altText: string;
  clipSides?: boolean;
  zoom?: number;
  zoomY?: number;
  zoomTop?: number;
  zoomOutPx?: number;
  sound?: boolean;
  audioSrc?: string;
  loop?: boolean;
  hero?: boolean;
  sectionFrame?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const usesExternalAudio = Boolean(audioSrc);

  const toggleSound = () => {
    const next = !soundOn;
    if (usesExternalAudio) {
      const audio = audioRef.current;
      const video = videoRef.current;
      if (audio) {
        audio.muted = !next;
        audio.volume = 1;
        if (next && video) {
          audio.currentTime = video.currentTime;
          if (!video.paused) {
            void audio.play().catch(() => {});
          }
        } else {
          audio.pause();
        }
      }
    } else {
      const video = videoRef.current;
      if (video) {
        video.defaultMuted = !next;
        video.muted = !next;
        video.volume = 1;
        void video.play().catch(() => {});
      }
    }
    setSoundOn(next);
  };

  useEffect(() => {
    if (!audioSrc) return;
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    const syncToVideo = () => {
      audio.currentTime = video.currentTime;
    };

    const playWithVideo = () => {
      syncToVideo();
      if (soundOn && !video.paused) {
        void audio.play().catch(() => {});
      }
    };

    const pauseWithVideo = () => {
      audio.pause();
    };

    const keepInSync = () => {
      if (!soundOn) return;
      if (Math.abs(audio.currentTime - video.currentTime) > 0.35) {
        audio.currentTime = video.currentTime;
      }
    };

    video.addEventListener("play", playWithVideo);
    video.addEventListener("playing", playWithVideo);
    video.addEventListener("pause", pauseWithVideo);
    video.addEventListener("seeking", syncToVideo);
    video.addEventListener("seeked", playWithVideo);
    video.addEventListener("timeupdate", keepInSync);

    if (soundOn && !video.paused) {
      playWithVideo();
    } else {
      audio.pause();
    }

    return () => {
      video.removeEventListener("play", playWithVideo);
      video.removeEventListener("playing", playWithVideo);
      video.removeEventListener("pause", pauseWithVideo);
      video.removeEventListener("seeking", syncToVideo);
      video.removeEventListener("seeked", playWithVideo);
      video.removeEventListener("timeupdate", keepInSync);
    };
  }, [audioSrc, soundOn]);

  const framed = hero || sectionFrame;
  const objectPosition =
    sectionFrame && zoomY
      ? `center ${50 + zoomY}%`
      : undefined;

  return (
    <div
      className={`relative ${
        hero
          ? "aspect-square overflow-hidden md:aspect-[1535/1023] lg:aspect-[2188/1023]"
          : sectionFrame
            ? "aspect-[1175/657] overflow-hidden"
            : clipSides || zoom > 1 || zoomY || zoomTop
              ? "overflow-hidden"
              : ""
      }`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop={loop}
        muted={usesExternalAudio ? true : !soundOn}
        playsInline
        preload="auto"
        aria-label={altText}
        className={
          framed
            ? "absolute inset-0 h-full w-full object-cover object-center"
            : undefined
        }
        style={
          hero
            ? clipSides
              ? { clipPath: "inset(0.45%)" }
              : undefined
            : sectionFrame
              ? {
                  ...(clipSides ? { clipPath: "inset(0.45%)" } : {}),
                  ...(objectPosition ? { objectPosition } : {}),
                  ...(zoom > 1 ? { transform: `scale(${zoom})` } : {}),
                }
              : {
                  display: "block",
                  height: "auto",
                  ...(clipSides ? { clipPath: "inset(0.45%)" } : {}),
                  ...(zoom > 1 || zoomY || zoomTop
                    ? {
                        width: zoomOutPx
                          ? `max(100%, calc(${zoom * 100}% - ${zoomOutPx * 2}px))`
                          : `${zoom * 100}%`,
                        maxWidth: "none",
                        marginLeft:
                          zoom > 1
                            ? zoomOutPx
                              ? `min(0px, calc(-${((zoom - 1) / 2) * 100}% + ${zoomOutPx}px))`
                              : `-${((zoom - 1) / 2) * 100}%`
                            : undefined,
                        marginTop: zoomTop
                          ? `-${Math.max(0, zoomTop - zoomOutPx)}px`
                          : 0,
                        marginBottom: zoomY
                          ? `min(-36px, calc(${zoomY}% + ${zoomTop + zoomOutPx}px))`
                          : zoomTop
                            ? `${zoomTop + zoomOutPx}px`
                            : undefined,
                      }
                    : { width: "100%" }),
                }
        }
      />
      {audioSrc ? (
        <audio
          ref={audioRef}
          src={audioSrc}
          loop={loop}
          muted={!soundOn}
          preload="auto"
          hidden
        />
      ) : null}
      {sound ? (
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? "Mute sound" : "Unmute sound"}
          className="absolute bottom-3 left-3 z-10 flex items-center gap-2 bg-black/75 px-3 py-1.5 text-sm tracking-tight text-white md:bottom-4 md:left-4 md:text-base">
          <SpeakerIcon on={soundOn} />
          {soundOn ? "Sound on" : "Sound off"}
        </button>
      ) : null}
    </div>
  );
}

function SpeakerIcon({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path fill="currentColor" d="M4 9v6h3.5L12 19V5L7.5 9H4z" />
      {on ? (
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          d="M15.2 8.4a4.2 4.2 0 0 1 0 7.2M17.8 6.2a7.2 7.2 0 0 1 0 11.6"
        />
      ) : (
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          d="M16 9.2 20.4 14.8M20.4 9.2 16 14.8"
        />
      )}
    </svg>
  );
}
