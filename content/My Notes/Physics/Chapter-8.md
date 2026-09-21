---
tags:
  - cuet
  - physics
created: 2026-04-17 02:10
---

**Chapter 8 - Electromagnetic Waves**
- EMW are Light waves
- they are non mechanical waves

**Concept:**
1. Changing $\phi_{B}$ produces electric field
2. Since nature is symmetric, changing electric flux must produce magnetic field.

## Displacement Current
Lets start with our [[CUET/Physics/Chapter - 4#Ampere's Circuital Law (hugely important)|Ampere's Circuital Law]] from Chapter 4, Ampere simply said $\oint B\cdot dl = \epsilon_{0} I$ but later Urban Maxwell Came and said that there should also be Displacement Current.

**1st Derivation**
We know that 
$$
\begin{align*}
\phi_{E} &= E \cdot A \\
\phi_{E} &= \frac{Q}{\epsilon_{0}A} \cdot A \\
\phi_{E} &= \frac{Q}{\epsilon_{0}}
\end{align*}
$$
Now Diffrentiating both sides, we get
$$
\begin{align*}
\frac{d\phi_{E}}{dt} &= \frac{d}{dt} \left( \frac{Q}{\epsilon_{0}} \right) \\
\frac{d\phi_{E}}{dt} &= \frac{1}{\epsilon_{0}} \frac{dQ}{dt} \\
\epsilon_{0} \times \frac{d\phi_{E}}{dt} &= I  \\
\Aboxed{I_{d} &= \epsilon_{0}\frac{d\phi_{E}}{dt}}
\end{align*}
$$
**2nd Way of Derivation**
$$
\begin{align*}
\oint E \cdot ds &= \phi = \frac{q_{enc}}{\epsilon_{0}} \\
\therefore q_{enc} &= \phi \epsilon_{0} \\
\text{We know that:} \\
I &= \frac{dq}{dt} \\
I &= \frac{d(\phi \epsilon_{0})}{dt} \\
\Aboxed{I_{d} &= \epsilon_{0} \frac{d\phi_{E}}{dt}}
\end{align*}
$$

```Q
Q) In order to establish an instantaneous displacement current of 1 mA in the space between the plates of 2µF parallel plate capacitor, the potential difference need to apply is
```
## Ampere-Maxwell's Law
$$
\oint B\cdot dl = \mu_{0} \left( I_{c} + \epsilon_{0} \frac{d\phi_{E}}{dt} \right)
$$
### Maxwell's Equations in Vaccum
$$
\oint E \cdot dA = \frac{Q_{enc}}{\epsilon_{0}}
$$
$$
\oint B \cdot dA = 0
$$
$$
\oint E \cdot dl = \frac{-d\phi_{B}}{dt}
$$
$$
\oint B\cdot dl = \mu_{0} \left( I_{c} + \epsilon_{0} \frac{d\phi_{E}}{dt} \right)
$$
## Electromagnetic Waves
**Source:**
- Stationary charge produces Electric Field
- Moving charge with constant velocity produces $\vec{E}$ and $\vec{B}$ field
- Accelerating charge produces Electromagnetic Waves, both are variable & prodces each other
- In these waves $\vec{E}$ and $\vec{B}$ vary sinusoidally. $\vec{E}$ and $\vec{B}$ become maximum at same place and at the same time, but perpendicular to each other as well as to direction of propagation. Therefore the phase difference between the two fields is zero.
- These waves do not require material for their propagation.
- Electric field vector of an electromagnetic wave produces optical effect hence it is also known as light/optical vector.

![[Pasted image 20260506055350.png]]
By SuperManu - Self, Own work based on: Onde electromagnetique.png, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2107870
$$
c = \lambda \nu
$$
- where c = speed of light
- $\lambda$ = wavelength
- $\nu$ = frequency

**Speed of Light in any Medium**
$$
v = \frac{1}{\sqrt{ \mu \epsilon }}
$$
**E = BC Formula Derivation**
$$
\begin{align*}
\frac{1}{2} \epsilon_{0}
E^2 &= \frac{1}{2} \frac{B^2}{\mu_{0}} \\
\epsilon_{0}E^2 &= \frac{B^2}{\mu_{0}} \\
\frac{E^2}{B^2} &= \mu_{0}\epsilon_{0}\\
\frac{E^2}{B^2} &= \frac{1}{\mu_{0}\epsilon_{0}} \\
\sqrt{ \frac{E^2}{B^2}} &= \frac{1}{\sqrt{ \mu_{0}\epsilon_{0} }}  \\
\frac{E}{B} &= c \\
E &= Bc
 \end{align*}
$$
**EM Wave Intensity**
$$
\text{Intensity} = \frac{\text{Energy}}{\text{Area} \times \text{time}}
$$
## Electromagnetic Spectrum
> Mnemonics : Gadi XUV In My Range

- Radio Waves
- Microwaves
- Infrared Waves
- Visible 
- Ultravoilet
- X - Rays
- Gamma Rays

### Radio Waves (>0.1m)
- Pruduced by accelerated motion of charges
- Used in Radio & Television & Cellular Phone
### Microwaves (0.1m - 1mm)
Produced by Special Vaccum Tubes
Used in
- Radar System
- Microwave Oven
### Infrared (1mm - 700nm)
Produced by Hot Bodies & Molecules
Sometimes refered as Heat Waves
Used in Remote
Snakes can detect this
### Light (700nm - 400nm)
What we see.
### Ultravoilet (400nm - 1nm)
Produced by Very Hot Bodies (like me), special lamps & sun.
UV in large quantities has been Harmful for Humans, it induces more melanin production, & thus more tanning.

Wavelength $4 \times 10^{7} - 6 \times 10^{-10}$
Used to kill germs

### X-rays (1nm - $10^{-3}m$)
Used in Medical Purpose & treatment of some cancer.
Wavelength: $10^{-8}m$ to $10^{-13}$m
### Gamma Rays (<$10^{-3}$ nm)
Produced in Nuclear Radiations, 