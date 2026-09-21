---
tags:
  - physics
created: 2026-04-03 13:10
title: Chapter - 3 Current Electricity
---

## Electric Current
**Electric Current:** Rate of Flow of Charge per unit Time.
**Unit:** Ampere or C/S
$$
I = \frac{Q}{t} \text{ or } Q = It
$$
### Average & Instantaneous Current
$$
I = \frac{\Delta Q}{\Delta t} = \frac{d\,Q}{d\,t}
$$
$$
\int_{q_{1}}^{q_{2}} dq  =\int_{t_{1}}^{t_{2}} I \, dt 
$$
### Graph
- Slope of Charge-Time graph gives us Current
- Area under Current-Time graph gives us Charge
### Current in Different Materials
- **Conductors** - Free Flow of Electrons
- **Electrolytes** - Charge flows thru fluid, via Ions
- **Semiconductors** - Not much free electrons , charge flows thru Electrons & Holes (leads so Chapter - Semiconductors)

![[Pasted image 20260403162420.jpg]]
## Ohm's Law
The current in a *conductor* (not sayin' bout semiconductor) is directly proportional to the potential difference applied across it, provided external conditions like temperature etc. remain constant.
$$
V = IR
$$
### Resistance (R)
→ Obstruction in the flow of charge
→ It DOES NOT depends on V or I
→ It depends on Length, Area (cross-sectional) & *Resistivity* of Material & Temprature too
**SI Unit:-** $\Omega$ or ohm
$$
R = \frac{\rho\,\ell}{A}
$$
Where $\rho$ is **resistivity** 
- (Unit : $\Omega\,m$)
- Materials are classified as conductors, insulators & semiconductors on their resistivities.
- **Metals Resistivity:** $10^{-8} \Omega m$ to $10^{-6} \Omega m$
- Insulators have resistivities 10^18 times greater than metals or more. 
```Q
Q) The resistance of a wire is 'R' ohm. If it is melted and stretched to 'n' times its original length, its new resistance will be:
A) R' = $n^2$ R
```
### Graph
→ The Graph is a Straight Line as we all know (from Class X).
1. Slope of V-I Graph gives us R (Resistance)
2. Slope of I-V Graph gives us 1/R = C (Conductance)

### Current Density (J)
$$
\vec{J} = \frac{I}{\vec{A}}
$$
**Unit:-** $A/m^{2}$

### Equivalent form of Ohm's Law
$$
V = I \times \frac{\rho \ell}{A}
$$
- We know that $E = V/\ell$ from Chapter 2 : [[CUET/Physics/Chapter - 2#Relation between field and potential| Relation between field and potential]]
- And J = I/A, so:
    $$
    \begin{align*}
    V &= j \rho \ell \\
    E &= j \rho \\
    \text{And 1/p = } \sigma &\text{ i.e. conductivity} \\
    \Aboxed{j &= E \,\sigma} \tag{ncert 3.13}
    \end{align*}
    $$

## Drift Velocity
Drift velocity $v_{d}$ is ==the average velocity that free electrons in a conductor acquire, moving against an electric field towards the positive terminal==.
Drift Velocity = $V_{avg} = 10^{-5} m/s$
$$
\boxed{\vec{v_{d}} = - \frac{e\,\vec{E}}{m}\tau}
$$
### Derivation 
We know that F = ma = eE , so a = eE/m , okey? so now in a conductor, before connecting a battery, electrons are colliding:
Let $u_{1}+u_{2}+u_{3}+\dots + u_{n}$ are initial velocties of electrons, so
$$
u_{avg} = \frac{u_{1}+u_{2}+u_{3}+\dots+ u_{n}}{n} = 0
$$
Right? $u_{avg}$ is *Average Initial Thermal Velocity* before connecting the battery.
After Connecting the battery: 
Let $v_{1}+v_{2}+v_{3}+\dots + v_{n}$ are final velocties of electrons
So $v_{1}=u_{1}+at_{1}$ , $v_{2}=u_{2}+at_{2}$ , $v_{n}=u_{n}+at_{n}$
**The Drift Velocity is the average of all these velocities**, so lets find avg:
$$
\begin{align*}
V_{d} &= u_{avg} + a\,t_{avg} \\
&= 0 + a\,\tau \\
&= \frac{eE}{m}\tau
\end{align*}
$$
Where $\tau$ is the **Average Relaxation Time**
### Relation b/w Current and Drift Velocity 
We know that *Distance= Speed × Time*, so distance travelled by electrons in a conductor is $\ell = V_{d}\Delta t$ and the Free-Electron-Volume Density is **n** (means n is the number of free electrons per unit volume in that metal).
So the **Total Number of Electrons** :
$$
\begin{align*}
N &= n \times Vol. \\
&= n \times (A\ell) \\
N &= \boxed{n A (V_{d} \Delta t)} \\
\end{align*}
$$

Since $Q = Ne$,
$$
\begin{align*}
Q &= N \times e \\
&= (n A V_d \Delta t) \times e \\
Q &= \boxed{neA V_{d} \Delta t} \\
\end{align*}
$$
And Current $I = Q/t$, so here, I =
$$
I = neAV_{d}
$$
### Current Density & Drift Velocity
We know that$\vec{J} = I/A$
$$
\begin{align*}
\Aboxed{j &= neV_{d}} \\
&= ne \times \left( \frac{eE}{m}\tau \right) \\
j &= \frac{ne^{2}E}{m}\tau
\end{align*}
$$
Comparing it with [[#Equivalent form of Ohm's Law]] we get:
$$
\sigma = \frac{ne^{2}}{m}\tau \tag{Eqn 1}
$$
This shows that $j = \frac{ne^{2}E}{m}\tau$ is exactly as the Ohm's Law.
A better derivation apart from NCERT is : [[Ohm's Law connection with Drift Velocity]]
### Mobility
Mobility $\mu$ is the measure of how quickly charge carriers (such as electrons) move through a material under an electric field.
- **Mobility is always +ive**
- **Unit:-** m/Vs or cm/Vs
$$
m = \frac{V_{d}}{E}
$$
$$
\boxed{m = \frac{e \tau}{m}}
$$
## Temprature Dependence of Resistivity
$$
\rho_{T} = \rho_{\circ}[1-\alpha(T_{T} - T_{\circ})]
$$
- Where $\rho_{T}$ is the resistivity at temprature T
- And $\rho_{\circ}$ is the same at a ref. Temp. $T_{\circ}$
- $\alpha$ is **Temprature coefficient** with Dimension $[T]^{-1}$ ; $\alpha$ is Positive for Metals

---
In Metals if the Temprature rises then Resistivity also rises, see this, dont get scared this is Equation 1, 
$$
\rho = \frac{m}{\textcolor{red}{n}e^2 (\tau \downarrow)}
$$
n →No change
$\tau$ → goes down
So $\rho$ rises

But in Semiconductors when rising temprature, we see that resistivty goes down, you'll be like how tf $\rho$ gettin reduced if the $\tau$ is decreasing, see dude :
$$
\rho = \frac{m}{\uparrow\uparrow ne^2 (\tau \downarrow)}
$$
So basically $\tau$ is decresing but n is increasing more, like a lot. 
**

---
## Electrical Energy, Power ✤
nothing

## Cells, EMF, Internal Resistance 
Here, the cell we take is an Electrolytic Cell.


Maximum Potential Difference between two terminals of a cell when circuit is open is called EMF $\mathcal{E}$  (It's potential difference & not a force!)
*Think of it like $\mathcal{E}$ is the Potential which cell produces, but you're getting 'Ir' less potential from it, so its V which you're getting on the two terminals*
$$
\mathcal{E} = V_{+} + V_{-} >0
$$
### Discharging Circuit
$V = V_{+} + V_{-} - Ir$
$$
V = \mathcal{E} - Ir
$$
---
Also we know that $V = IR$  and also $V = \mathcal{E} - Ir$ so
$$
IR = \mathcal{E} - Ir
$$
$$
\text{Or. }I = \frac{\mathcal{E}}{R+r}
$$
The maximum current that can be drawn from a cell is $I_{max} = \mathcal{E}/r$ for (R=0)

## Cells in Series & Parallel
### In Series
$$
V_{net} = E_{eq} + I\,r_{eq}
$$
Where $\mathcal{E}_{eq} = \mathcal{E}_{1} + \mathcal{E}_{2} + \dots$
And $r_{eq} = r_{1}+r_{2}+\dots$
### In Parallel
The V across ends will be same and Current will Divide
$$
\begin{align*}
I &= I_{1}+I_{2} \\
&= \frac{\mathcal{E}_{1}-V}{r_{1}} + \frac{\mathcal{E}_{2}-V}{r_{2}}  \\
I &= \left( \frac{\mathcal{E}_{1}}{r_{1}} +\frac{\mathcal{E}_{2}}{r_{2}} \right) - V \left( \frac{1}{r_{1}} + \frac{1}{r_{2}} \right) \\
I &= \frac{\mathcal{E}_{eq}}{r_{eq}} - \frac{V}{r_{eq}}
\end{align*}
$$
Which now became the one Equivalent Cell Equation, thus
$$
\frac{\mathcal{E}_{eq}}{r_{eq}} = \frac{\mathcal{E}_{1}}{r_{1}} + \dots + \frac{\mathcal{E}_{n}}{r_{n}}
$$
And
$$
\frac{1}{r_{eq}} = \frac{1}{r_{1}} + \dots + \frac{1}{r_{n}}
$$
---
## Kirchhoff's Law
1. Kirchhoff's Current Law (KCL) states that the total current entering a junction in a circuit must be equal to the total current leaving the junction

2 laws

![[Pasted image 20260407141510.jpg|802x697]]
## Wheatstone Bridge
![[Pasted image 20260407211527.png]]
$$
\frac{R_{P}}{R_{R}} = \frac{R_{Q}}{R_{S}}
$$

---
**Chapter Revision Keywords**
Current → Ohm's Law → Resistance & Resistivity → Current Density → Equivalent form of Ohm's Law → Drift Velocity → Relation b/w Current and Drift Velocity → Mobility → Temprature Dependence → Cell & EMF & Internal Resistance → Cells in Series/Parallel → Kirchoff's 1st Law (In Total = Out Total) & 2nd law (Loop Law) → Wheatstone Bridge