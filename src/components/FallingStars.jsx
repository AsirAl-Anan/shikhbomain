"use client"

import { useEffect, useRef } from "react"

export default function FallingStars() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let stars = []

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star class
    class Star {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = 0
        this.size = Math.random() * 2 + 0.5
        this.speed = Math.random() * 3 + 1
        this.opacity = Math.random() * 0.7 + 0.3
        this.tail = Math.random() * 30 + 10
        this.color = this.getRandomColor()
      }

      getRandomColor() {
        const colors = [
          "rgba(255, 255, 255, ",
          "rgba(173, 216, 230, ",
          "rgba(135, 206, 250, ",
          "rgba(176, 196, 222, ",
          "rgba(100, 149, 237, ",
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      draw() {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.y - this.tail)

        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y - this.tail)
        gradient.addColorStop(0, `${this.color}${this.opacity})`)
        gradient.addColorStop(1, `${this.color}0)`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = this.size
        ctx.stroke()

        // Add a small glow at the head of the star
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `${this.color}${this.opacity})`
        ctx.fill()
      }

      update() {
        this.y += this.speed

        // Reset star when it goes off screen
        if (this.y > canvas.height) {
          this.reset()
        }
      }
    }

    // Initialize stars
    const initStars = () => {
      stars = []
      const numberOfStars = Math.floor((canvas.width * canvas.height) / 10000)

      for (let i = 0; i < numberOfStars; i++) {
        const star = new Star()
        star.y = Math.random() * canvas.height // Distribute stars across the canvas initially
        stars.push(star)
      }
    }

    initStars()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.update()
        star.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />
}
