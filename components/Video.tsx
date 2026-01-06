import Image from 'next/image'

export default function Video() {
  return (
    <div className="video-section fix">
      <div className="video-wrapper">
        <div className="video-thumb fix">
          <Image data-speed=".8" src="/assets/img/home-1/video-image.jpg" alt="" width={1920} height={1080} />
          <div className="video">
            <a href="https://www.youtube.com/watch?v=R0mku_PtK1E" className="ripple video-btn video-popup">
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

