---
tags:
  - cuet
  - physics
created: 2026-04-07 21:25
title: Chapter - 4 Moving Charges & Magnatism
---

## Magnetic Field Concept:
 → When charge is at rest it produces Electric Field.
→ When charge is in uniform motion it produces electric field $\vec{E}$ and magnetic field too i.e. $\vec{B}$ 
→ And When charge is in accelerated motion it produces EM Waves

$\vec{B}$ is called Magnetic Field Intensity (MFI)
**SI Unit:-** T (tesla) **CGS Unit:-** Gauss ; 

**Oersted's Experiement**
> So one ngga named Hans Cristian Oersted who was a professor at the University of Copenhagen, was giving a lecture on electricity, During the course of the lecture, Oersted happened to bring a wire carrying an electric current near a magnetic needle... To his surprise (and he was a very surprised man indeed) the needle deflected.

## Biot Savart Law
*No Derivation in NCERT* 
→ It gives the *relation between current and the magnetic field* it produces.
$$
|dB| = \frac{\mu_{0}}{4\pi} \frac{I\,dl\,\sin \theta}{r^2}
$$
And the vector form is 
$$
|d\vec{B}| = \frac{\mu_{0}}{4\pi} \frac{I\,d\vec{l} \times \vec{r}}{r^3}
$$
Where $\mu_{0}$ is the **Permeability of Free Space**
Value of $\mu_{0}/4\pi$ is $10^{-7} \,TmA^{-1}$
And thus $\mu_{0} = 4\pi \times 10^{-7}$  👈 Imp ASF.

**Similarities Between Biot-Savart Law & [[CUET/Physics/Chapter - 1#Coulomb's Law|Coulomb's Law]]:**
1. Both are long range.
2. Superposition Principle applies to both fields.
3. Idk but some more,
4. Whoever tf is prep'in for board, google it dawg.

**Relation b/w Permeability & [[CUET/Physics/Chapter - 1#Permittivity of Free Space|Permittivity of Free Space]]**
$$
\mathcal{E}_{\circ}\mu_{\circ} = \frac{1}{c^2}
$$

### Magnetic Field on Long Straight Current Carrying Conductor/Wire
#### Finite & Angles Given

![[Pasted image 20260501154548.png|439x439]] ![[Your paragraph text_20260501_155536_0000.png|438x438]]
$$
B = \frac{\mu_{0}}{4\pi} \frac{I}{r} (\sin \phi_{1} + \sin \phi_{2})
$$
#### Infinite Wire
**If the wire is infinite:** sin 90° + sin 90° = 2, so 
$$
B = \frac{\mu_{0}}{2\pi} \frac{I}{r} 
$$
### Magnetic Field on the *Center* of Circular Current Loop
*But in NCERT we first study the* [[#Magnetic Field on the *Axis* of Circular Current Loop]] 

$$
\begin{align*}
\int dB &= \int\frac{\mu_{0}}{4\pi} \frac{Id\ell \sin \theta}{r^2} \\
B &= \frac{\mu_{0}I}{4\pi r^2} \int d\ell \sin 90 \\
&= \frac{\mu_{0}I}{4\pi r^2} \times 2\pi r \\ \\
\Aboxed{B &= \frac{\mu_{0}I}{2r}}
\end{align*}
$$
**Just multiply ts with n, for n number of turns.**

### Magnetic Field on the *Axis* of Circular Current Loop
![[Pasted image 20260411200930.png|820x429]]
$$
\begin{align*}
dB_{x} &= \int dB \sin \phi \\
&= \int\frac{\mu_{0}}{4\pi} \frac{Id\ell \sin \theta}{r^2} \sin \phi \\
&= \frac{\mu_{0}}{4\pi}\int\frac{Id\ell\sin 90}{(\sqrt{ R^2 + x^2})^2} \sin \phi \\
& =\frac{\mu_{0}}{4\pi} \frac{I}{(\sqrt{ R^2 + x^2})^2} \times \frac{R}{\sqrt{ R^2 + x^2}} \int d\ell \\
&= \frac{\mu_{0}}{4\pi} \frac{IR}{(R^2 + x^2)^{3/2}} \times 2\pi R \\
\Aboxed{B_{x} &= \frac{\mu_{0}}{2} \frac{IR^2}{( R^2 + x^2)^{3/2}}} \text{ 👈 🫩}
\end{align*}
$$
This is not NCERT Derivation ☝️

And by NCERT, if x=0 , we'll get the same expression of MF at the *Center* of Circular Current Loop i.e. $B = \Large\frac{\mu_{0}I}{2r}$

```Q
Q) A circular coil of wire consisting of 100 turns, each of radius 8.0 cm carries a current of 0.40 A. What is the magnitude of the magnetic field B at the centre of the coil? [Ncert 4.1]
A) $3.14 \times 10^{-4} \, T$
```
```Q
Q)The magnetic field of given length of wire for single turn coil at its centre is B then its value for two turns coil for the same wire is:

```
```Q
Q) Two concentric circular coils of ten turns each are situated in the same plane. Their radii are 20 and 40 cm and they carry respectively 0.2 and 0.3 ampere current in opposite direction. The magnetic field inweber/m²at the centre is:
A) $5/4 \, \mu_\circ$
```
## Ampere's Circuital Law (hugely important)
The sum of the magnetic field along any closed path equals μ₀ times the current enclosed by that path.
$$
\oint B \cdot dl = \mu_{0} I
$$
The $\oint B \cdot dl$ means : At every tiny step along your closed loop, check how much magnetic field is running along that step — then add all of it up. 
### Application: Straight Wire
$$
\begin{align*}
\oint B \cdot dl &= \mu_{0}I \\
\oint B\,dl &= \mu_{0}I \text{ cuz parallel B \& dl}\\
B \oint dl  &= \mu_{0} I \\ 
B \times 2 \pi r &= \mu_{0} I \\
B &= \frac{\mu_{0}I}{2\pi r}
\end{align*}
$$

### Application: Solenoid
![[Pasted image 20260410163306.jpg|775x301]]

Applying Ampere's law in loop abcd
$$
Bl + 0 + 0 = \mu_{0} (I_{net}) 
$$
- If n = turns per unit length & length = l
- then total turns = $n \times l$ 
- and each having current I so, putting & comparing it in Ampere's Law 
- also canceling l on both sides we get
$$
\boxed{B = \mu_{0} nI}
$$
## Force on a moving charge in an External Magnetic Field
$$
\boxed{F = qv \cdot B\sin \theta}
$$
This one is important cuz 
Or 
$$
\vec{F} = q(\vec{V} \times \vec{B})
$$
- when $\theta = 90 \implies F_{max} = qvB$ 
- when $\theta = 0 \implies F_{min} = 0$ 

### Lorentz Force
*Agar ek charge ek ayese region me move kar raha hai jaha Electric Field aur Magnetic field dono hain to uspar jo combined force lagegi use Lotentz Force Kehte hai*
$$
\vec{F} = \vec{F}_{e} + \vec{F}_{B} \implies q\vec{E} + q (\vec{V} \times \vec{B})
$$
### Force on a Current carrying Wire due to External Magnetic FIeld
So we can write Force on a single charge as $F = qv \cdot B\sin \theta$
Just imagine, what if we find net force by all charges? It's easy but first let's find the no. Of all charges,
- If n is the number density (volumetric) of charge i.e. $n = N/V$, 
- can we write TOTAL NUMBER OF CHARGES = n × V
- also Volume (V) = Area (A) × length (l)
- soTOTAL NUMBER OF CHARGES = $\boxed{nAl}$
$$
F_{e} = -e(\vec{V}_{d} \times \vec{B})
$$
Force by all charges,
$$
\begin{align*}
F_{total} &= F_{e} \times nAl \\
&= -e V_{d} B \; (nAl) \\
&= I (l \times B) \\
&= B I \;l \sin \theta
\end{align*}
$$
Why this happened? Cuz we knew from [[CUET/Physics/Chapter - 3#Relation b/w Current and Drift Velocity|Chapter - 3 : Relation b/w Current and Drift Velocity]] that $I = neAV_{d}$

### Workdone by Magnetic Force 
*Turns out this force is nalla* cuz $\vec{F} \perp \vec{V}$ thus $W = \vec{F} \cdot \vec{d} = \cos 90 = 0$
**So workdone is ZERO**
### Motion of a Charged Particle in Uniform Magnetic Field
**1) In the Same Direction**
If a charge is moving in the direction of magnetic Field, then $\theta = 0$ and thus $F = qVB\sin \theta  = 0$ and so acceleration = 0 and hence it'll move in a straight line with CONSTANT VELOCITY

**2) Movin' Perpendicular**
It'll move Perpendicular like $\vec{V}\perp \vec{F}$ so it'll move in circular motion,
So $F_{B} = F_{C} \implies qVB\sin 90 = \frac{mv^2}{r}$
$$
\begin{align*}
F_{B} &= F_{c}  \\
qV\,B\sin{90} &= \frac{mv^2}{r} \\
\Aboxed{r &= \frac{mv}{qB}}
\end{align*}
$$
**Time Period -**
$$
\begin{align*}
T &= \frac{2\pi r}{v} \\
&= \frac{2\pi}{\cancel{v}} \frac{m\cancel{v}}{qB} \\
\Aboxed{T &= \frac{2\pi m}{qB}}
\end{align*}
$$
**Frequency**
$$
f = \frac{1}{T} = \frac{qB}{2\pi m}
$$
## Force b/w Two Parallel Currents & Ampere's Definition
![[image (1).png|449x346]]

So we know from [[#Force on a Current carrying Wire due to External Magnetic FIeld]] that it is 
$$
F = I L B \sin \theta
$$
And here the angle is 90 deg so *(see below)* and also value of $B_{a}$ is smth we know from [[#Infinite Wire|Magnetic Field on Infinitely long Current Carrying Wire]] i.e. $\mu_{0}I / 2\pi r$
$$
\begin{align*}
F_{ba} &= I_{b} L B_{a} \sin 90° \\
\frac{F_{ba}}{L_{b}} &= I_{b} \left( \frac{\mu_{0}}{2\pi} \frac{I_{a}}{d} \right) \\
\frac{F_{ba}}{L_{b}} &= \frac{\mu_{0}}{2\pi} \frac{I_{a} I_{b}}{d} \\ \\
\Aboxed{F_{ba} &= \frac{\mu_{0}}{2\pi} \frac{I_{a} I_{b}}{d} L_{b}}
\end{align*}
$$
Also if $f_{ba}$ is $F_{ba}$ per unit length then
$$
f_{ba} = \frac{\mu_{0}I_{a} I_{b}}{2\pi d}
$$
**Ampere's Definition:-** If there are two currents, one is $I_{1}$ and other is $I_{2}$ and distance b/w them 'r' is 1 meter & the force between them is $F = 2 \times 10^{-7} \,N/m$ 
Then I = 1 Ampere
## Torque on Current Loop, Magnetic Dipole
### Torque on Rectangle Current Loop in Uniform Magnetic Field
![[Pasted image 20260502144134.jpg|439x334]]
$$
\begin{align*}
\tau &= F \times r \\
&= I aB\sin 90 \times b \\
&= I(ab) B\sin 90 \\
&= I AB\sin 90
\end{align*}
$$
IA or NIA (for-N-turns)is also called **Magnetic Moment of Coil** $\vec{m}$

**So Vector Form:**
$$
\tau = \vec{m} \times \vec{B}
$$
**For n Turns**
$$
\tau = NIA\;B\sin \theta
$$

### Circular Current Loop as a Magnetic Dipole
Let's revise the [[#Magnetic Field on the *Axis* of Circular Current Loop]]
It was :
$$
B_{x} = \frac{\mu_{0}}{2} \frac{IR^2}{( R^2 + x^2)^{3/2}}
$$
But if x>>>R then, we get
$$
\begin{align*}
B_{x} &= \frac{\mu_{0}}{2} \frac{IR^2}{x^3} \\
B &= \frac{\mu_{0}}{2} \frac{IR^2}{x^3} \times \frac{\pi}{\pi} \\
B &= \frac{\mu_{0}}{2} \frac{IA}{\pi \;x^3}  \\
\text{Since } m &= IA \\
B &= \frac{\mu_{0}}{4\pi} \frac{2m}{x^3}
\end{align*}
$$
Now compare it with [[CUET/Physics/Chapter - 1#Electric Dipole|Electric dipole field (on axis)]] from Chapter 1 which was
$$
E = \frac{1}{4\pi \epsilon_{0}} \frac{2p}{x^3}
$$
SO U SEE THE PATTERN? If we just put $\mu_{0}$ as $1/\epsilon_{0}$ we can get expressions for dipoles by electric field.
And so we can also find for *Perpendicular bisector of dipole* which was
$$
E = \frac{1}{4\pi \epsilon_{0}}\frac{p}{x^3}
$$
It will become
$$
\boxed{B = \frac{\mu_{0}}{4\pi} \frac{m}{x^3}}
$$

## The Moving Coil 'Galvanometer'
Galvanometer's needle experiences a **Deflecting Torque:**
$$
\tau = NIBA
$$
But it gets cancelled by a Spring which gives a Restoring Torque:
$$
\tau_{restoring} = k \phi = NIAB
$$
- where k = **Torsional Constant**
- and $\phi$ is deflection angle
$$
\phi = \left( \frac{NAB}{k} \right) I
$$
And btw NAB/k is a constant for a given Galvanometer
**Current Sensitivity**
↪ Deflection per unit current
$$
\frac{\phi}{I} = \frac{NAB}{k}
$$
### Conversion of Galvanometer to Ammeter




