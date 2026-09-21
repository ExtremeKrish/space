---
tags:
  - physics
created: 2026-03-27 00:22
title: Chapter - 2 Electric Potential & Capacitance
---

- Workdone of all forces = $\Delta KE$
- $W_{ext} + W_{elec} = \Delta KE$
- $W_{ext} = \Delta U$ so $W_{elec} = -\Delta U$

**Conservative Forces:-**
- Gravitational Force
- Spring Force
- Electric Force
## Electrostatic Potential Energy (U)
Workdone in bringing a test charge from $\infty$ to R distance in a Electric Field is stored as Electrostatic Potential Energy

**Electric Potential Energy (U) = Work done by EXTERNAL force** (Derivation not in NCERT)
$$
\begin{align*}
U_{p} =W_{ext(\infty \to p)} &= \int_{\infty}^{p} f_{ext} \, dr \\
&= \int_{\infty}^{p} \frac{kQq}{r^{2}} \, dr \\
&= KQq \int_{\infty}^{p} \frac{1}{r^{2}} \, dr  \\
&= KQq \left[ -\frac{1}{r} \right]_{\infty}^{r} \\
&= KqQ \left[ \frac{-1}{\infty}-\left( \frac{-1}{r} \right) \right] \\
&= KqQ \left( \frac{1}{r}-\frac{1}{\infty} \right) \\
&= \frac{kQq}{r}
\end{align*}
$$

- If Q and q same sign → U>0 
- If opposite sign → U<0 (because q will be negative) 

### Potential Energy Difference
$$
\Delta U = U_{p} - U_{\infty}
$$
## Electric Potential (V)
$$
V =\frac{U}{q_{\circ}}
$$
- $\Delta U = V \cdot q$

### Electric Potential for a point charge (Main)
$$
\boxed{V_{p} = \frac{kQ}{r}}
$$
### Electric Potential Due to a Dipole
#### 1. At Axial Point
$$
\begin{aligned}
&\text{1. Potential from } +q \text{ at point } P: \\
&V_{+q} = \frac{kq}{R - a} \\
\\
&\text{2. Potential from } -q \text{ at point } P: \\
&V_{-q} = \frac{-kq}{R + a} \\
\\
&\text{3. Total Potential } (V_{net}): \\
&V_{net} = \frac{kq}{R - a} - \frac{kq}{R + a} \\
\\
&\text{4. Solving the algebra:} \\
&V_{net} = kq \left[ \frac{(R + a) - (R - a)}{(R - a)(R + a)} \right] \\
&V_{net} = kq \left[ \frac{R + a - R + a}{R^2 - a^2} \right] \\
&V_{net} = \frac{k(q \cdot 2a)}{R^2 - a^2} \\
\\
&\text{5. Since } p = q \cdot 2a: \\
&V_{net} = \frac{kp}{R^2 - a^2} \\
\\
&\text{6. For a short dipole } (R \gg a): \\
&V \approx \frac{kp}{R^2}
\end{aligned}
$$

#### 2. At Any Point
$$
\begin{aligned}
&\text{Potential at General Point } (r, \theta) \\
\\
&\text{1. Distances from charges (approx):} \\
&r_1 \approx r - a \cos \theta \\
&r_2 \approx r + a \cos \theta \\
\\
&\text{2. Net Potential:} \\
&V_{net} = k q \left[ \frac{1}{r - a \cos \theta} - \frac{1}{r + a \cos \theta} \right] \\
\\
&\text{3. Solving the algebra:} \\
&V_{net} = k q \left[ \frac{(r + a \cos \theta) - (r - a \cos \theta)}{r^2 - a^2 \cos^2 \theta} \right] \\
&V_{net} = \frac{k q (2 a \cos \theta)}{r^2 - a^2 \cos^2 \theta} \\
\\
&\text{4. Final Result (using } p = 2aq): \\
&V_{net} = \frac{k p \cos \theta}{r^2 - a^2 \cos^2 \theta} \\
\\
&\text{5. For a short dipole } (r \gg a): \\
&V \approx \frac{k p \cos \theta}{r^2}
\end{aligned}
$$

#### 3. At Equitorial Point
V = 0

### Potential due to a system of charges
$$
V = V_{1}+V_{2}+\dots + V_{n}
$$
Btw this was for Electrostatic Potential which is a scalar qty.
Let's recall the Net Electric Field due to a system of charges from previous chapter which is the vector sum of the electric fields produced by each charge individually, as determined by the superposition principle. Okey?
## Equipotential Surfaces
Well..., I dont think I have to explain this.
### Relation between field and potential
$$
\begin{align*} W_{c} &= -\Delta U \\ W_{elec} &= -\Delta U \\ dW_{elec} &= -dU \quad \text{(Small change)} \\ \int dU &= -\int dW_{elec} \\ \int dU &= -\int \vec{F}_{elec} \cdot d\vec{x} \\ \int q \, dV &= -\int (q\vec{E}) \cdot d\vec{x} \\ V &= -\int \vec{E} \cdot d\vec{x} \\\\ \vec{E} &= -\frac{dV}{dx} \end{align*}
$$

This explains that Potential gets reduced in the direction of Electric Field

## Potential Energy of a System of Charges ¿
- **Bring $q_1$:** Work = 0.
- **Bring $q_2$:** Work = Work against $q_1$ (which is $\frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r_{12}}$).
- **Bring $q_{3}$:** Work = Work against $q_{1}$ and $q_{2}$ which is :- 
    $$
	\frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r_{12}}\frac{q_1 q_3}{r_{13}}\frac{q_2 q_3}{r_{23}}
	$$
	
## Potential Energy in an External Field
### 1. Of a Single Charge
$$
U = q_1 V(r_1)
$$
### 2. Of a System of two charges in an external field
$$
U = q_1 V(r_1) + q_2 V(r_2) + \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r_{12}}
$$

### 3. Of a Dipole in an external field ✤

## ---------------------------------
---
## Electrostatics of Conductors
In Metallic Conductors, the charge carriers are electrons, these are free within the metal but not free to leave the metal.
In Electrolytic Conductors, charge carriers are both positive and negative ions, but that situation is messy cuz movements is affected by External Electric Field and so called chamical-forces so we don't talk about Electrolytic Conductors here.
**Properties of Conductors**
1. Inside a conductor, electrostatic field is zero. ($\small E = 0$)
2. At the surface of charged conductor, electrostatic field must be normal to the surface at every point. 
3. The interior of a conductor can have no access charged in the static situation. 
4. Electrostatic potential is constant throughout the volume of the conductor and has the same value (as inside) on its surface.
5. Electric field at the surface of a charged conductor = $\large\frac{\sigma}{\epsilon_{0}} \small\hat{n}$ 
6. Electrostatic Shielding

## Dielectric & Polarisation
Dielectric is a substance which is kinda similar to Insulators but they can be polarised to help store energy. They're used in Capacitors.
There are two types of Dielectrics
1. Polar - have permanenet dipole moment cuz centers are seprated e.g. $H_{2}$ or $O_{2}$
2. Non Polar - centers coincide e.g. HCl , $H_{2}0$

![[Pasted image 20260328005335.png|378x400]]
## Capacitors and Capacitance
↪ A capacitor (condenser) is a system of two conductors seprated by an insulator.
-> A Device used to store charge
$$
C = \frac{Q}{V}
$$
$$
C = 4\pi \epsilon_{\circ} R
$$
**C is constant** and depends on:
1. Nature of Dielectric
2. & Geometric Configuration
3. It is **independent of Q or V**
**SI Unit :** 1 farad ($= 1 \,\,CV^{-1}$)
Other units : $\mu F = 10^{-6} F$ ,  $nF = 10^{-9} F$ 
## Parallel Plate Capacitor (Most Imp)
Q - Charge on any plate
A - Area of the plate
d - distance b/w the plates
V - Potential Diff of Plates
E - Electric Field b/w plates
$$
C = \frac{\epsilon_{\circ} A}{d}
$$

**Derivation:**
- We know that, $E = \frac{\sigma}{2 \epsilon_{\circ}}$
- $E_{net} = 2E = \frac{\sigma}{\epsilon_{\circ}} = \frac{Q}{A\epsilon_{\circ}}$
- Putting that in ($V = E \times d$) , we get 

$$
\begin{align*}
V &=\frac{\sigma}{\epsilon_{\circ}} \times d\\
V &= \frac{Q}{A \epsilon_{\circ}} \times d \\
\frac{\epsilon_{\circ} A}{d} &= \frac{Q}{V} \\
\Aboxed{C &= \frac{\epsilon_{\circ} A}{d}}
\end{align*}
$$

## Effect of Dielectric on Capacitance ✤

## Combination of Capacitors 
1. **Series**
	$$
	\frac{1}{C} = \frac{1}{C_{1}} + \frac{1}{C_{2}} + \dots+\frac{1}{C_{n}}
	$$
2. **Parallel**
	$$
	C_{net} =C_{1}+C_{2} + \dots+ C_{n}
	$$
## Energy stored in a Capacitor
$$
\boxed{U = \frac{1}{2} CV^2}
$$
$$
\boxed{U =\frac{Q^2}{2C}}
$$
$$
\boxed{U = \frac{1}{2}QV}
$$
### Energy Density of a Capacitor (U/Volume)
$$
\begin{align*}
u &= \frac{U}{Vol}\\
&= \frac{\frac{1}{2}CV^2}{Ad} \\
&= \frac{1}{2\cancel{A}d} \times \frac{\epsilon_{\circ}\cancel{A}}{d} \times (E \times d)^2\\
&= \frac{1}{2} \frac{\epsilon_{\circ}}{\cancel{d^2}} \frac{E^2\,\cancel{d^2}}{A} \\
u &= \frac{1}{2}\epsilon_{\circ}\,E^2
\end{align*}
$$











