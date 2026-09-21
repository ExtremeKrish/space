---
tags:
  - chemistry
created: 2026-03-23T15:43:00
title: Chapter-3 Chemical Kinetics
---

**Chemical Kinetics: -** branch of Chemistry that deals with Study of Reaction Rates and their mechanism

## Rate of Reaction
Change in Concentration of Reactants (or Products) in unit time.
-> **Unit of Rate** $mol\, L^{-1} s^{-1}$ ; or $atm/s$

If,   $\ce{A + B -> C + D}$

$$
\text{Rate} = \frac{-d[A]}{dt} = \frac{-d[B]}{dt} = \frac{d[C]}{dt} = \frac{d[D]}{dt} 
$$
### Average Rate
$$
\text{Average Rate} = \frac{\Delta x}{\Delta t}
$$
### Rate of Reaction if Stoichiometric Coefficient isn't same
If the eq. Is $\ce{aA + bB -> cC + dD}$ , then
$$
Rate = \frac{-1}{a}\cdot\frac{\Delta A}{\Delta t} = \frac{-1}{b}\cdot\frac{\Delta B}{\Delta t} = \frac{1}{c}\cdot\frac{\Delta C}{\Delta t} = \frac{1}{d}\cdot\frac{\Delta D}{\Delta t}
$$
 **Ways to Define rate**
1. Average
2. Instantaneous
3. Initial

**Types of Reaction**
1. Fast
	1. E.g Conbution Reaction in Crackers
	2. Ionic Reactions
	3. Neutralisation Reaction
2. Modrate
	1. $\ce{2NH3 -> N2 + 3H2}$
3. Slow
	1. Diamond to Graphite
	2. Reaction between H2 and O2 at room temprature
	3. Coke in Air 
---
#### Factors Influencing Rate of Reaction
1. Concentration -> We'll study Rate Law for ts
2. Temprature -> We'll study Arrhenius Equation for ts
3. Nature of Reactants (bonds needs to be broken more)
4. Catalyst (Changes mechanism & not gets consumed)
## Rate Law
It is the expression which relates the rate of reaction with concentration of the reactants.
The constant of proportionallity `k` is known as rate constant

Consider : $\ce{aA + bB -> cC + dD}$
Where a,b,c, and d are stoichiometric coefficients

$$
\text{Rate Expression} : Rate \propto [A]^x [B]^b
$$
**Rate Law becomes:-**
$$
Rate = k\,[A]^x [B]^b
$$
- Where k is the **Rate Constant**
- Where x & y may or may bot be equal to st.coe. of reactants
Also $\large\frac{-d[R]}{dt} = k\,[A]^x [B]^b$

### Order of a Reaction

$Rate = k\,[A]^x [B]^b$ so 
$$x+y = \text{Order of Reaction}$$
-> It can be 0,1,2,3 or even a fraction
-> But it *cannot* be negative 
-> this order need not to be same stoichiometric coefficients of the reactants

#### Units of Rate Constant
=> $Rate = k\,[A]^x [B]^b$
=> X+y = n
$k = \large\frac{Rate}{[A]^X[B]^Y}$

$= \large\frac{concentration}{time}\times\frac{1}{(concentration)^n}$

| Reaction              | Order | Formula                                                | Units               |
| --------------------- | ----- | ------------------------------------------------------ | ------------------- |
| Zero Order Reaction   | 0     | $\frac{mol\,L^{-1}}{s}\times\frac{1}{(mol\,L^{-1})^0}$ | $mol/L\,s$          |
| First Order Reaction  | 1     | $\frac{mol\,L^{-1}}{s}\times\frac{1}{(mol\,L^{-1})^1}$ | $s^{-1}$            |
| Second Order Reaction | 1     | $\frac{mol\,L^{-1}}{s}\times\frac{1}{(mol\,L^{-1})^2}$ | $mol^{-1}L\,s^{-1}$ |
### Molecularity
Molecularity is ==the total number of reactant species (atoms, ions, or molecules) that collide simultaneously in an elementary (single-step) chemical reaction to form products==.

-> Its value can be 1,2 or 3 max.
-> It cannot be a fraction

| Molecularity                                                                         | Order                                                                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 1) It is defined as the no. of molecules of reactants taking part in a reaction.     | 1) It is defined as the sum of the power of concentration terms that appear in the rate law.                 |
| 2) Example:  <br>$NH_4NO_2 \xrightarrow{\Delta} N_2 + 2H_2O$  <br>molecularity = $1$ | 2) Example:  <br>$NH_4NO_2 \xrightarrow{\Delta} N_2 + 2H_2O$  <br>$\text{Rate} = k[NH_4NO_2]^1$, order = $1$ |
| 3) It is a theoretical value.                                                        | 3) It is an experimental value.                                                                              |
| 4) It is always a whole no.; it can neither be zero nor fractional.                  | 4) It may be zero, fractional, or integral.                                                                  |

## Types of Reaction
1. Elementry Reaction - Takes place in one step
2. Complex Reactions - Takes place in a sequence of elementary reactions.
	1. The slowest elementary reaction is called Rate Determining Step.

## Integrated Rate Equations

### Zero Order Reactions
$$
R = -k\,t + R_{\circ}
$$
$$
k = \frac{[R\circ] - [R]}{t}
$$
**Examples:-**
1. Enzyme Calalyst Reactions
2. Decomposition of gaseous ammonia on a hot platinum surface 
3. $\ce{2HI \xrightarrow{Au} H2 + I2}$
### First Order Reaction
$$
R = [R_{\circ}] \,e^{-kt}
$$
$$
k = \frac{2.303}{t} \frac{\log[R_{\circ}]}{R}
$$
**Examples:-**
1. Hydrogenation of Ethene
	- $\ce{C2H4 (g) + H2 (g) -> C2H6 (g)}$
	- $Rate = k[C_{2}H_{4}]$
2. All natural and artificial radioactive decay of unstable nuclei take place by first order reaction 
3. Decomposition of $\ce{N2O5}$ and $\ce{N2O}$ are some more e.g.

#### First Order Gas Phase Reaction
$$
k = \frac{2.303}{t} \log{\frac{P_{\circ}}{2P_{\circ} - P}}
$$
### Half Life Reaction
$$
t_{1/2} = \frac{0.693}{k}
$$
### Pseudo First Order Reactions
If one reactant is in huge excess, its concentration stays constant → reaction behaves like lower order i.e. Second Order Reaction acts like first order

Pseudo first order reaction = a reaction that is actually higher order but behaves like first order.

**Example 1:**  
$$  
\text{CH}_3\text{COOC}_2\text{H}_5 + \text{H}_2\text{O} \rightarrow \text{products}  
$$
Actual rate:  
$$  
\text{Rate} = k[\text{ester}][\text{H}_2\text{O}]  
$$
Water is taken in large excess, so its concentration almost doesn’t change:  
$$  
[\text{H}_2\text{O}] \approx \text{constant}  
$$
So we combine it with k:  
$$  
\text{Rate} = k'[\text{ester}]  
$$
Thus, reaction behaves like first order though it is actually second order → called pseudo first order reaction.

**Suger Example**
Actual rate:  
$$  
\text{Rate} = k[\text{sugar}][\text{H}_2\text{O}]  
$$
Water is in excess:  
$$  
[\text{H}_2\text{O}] \approx \text{constant}  
$$
$$  
\text{Rate} = k'[\text{sugar}]  
$$


## Arrheneous Equation
$$
K = A\,e^{-\large\frac{E_{a}}{RT}}
$$
- Arrhenius equation is applicable to elementary process or one-step reaction.
- Since, exponential term is unit less, the unit of K and A would be the same.
- It is assumed that the Arrhenius parameters (E_a, A) are independent of temperature.

### Activation Energy
![Graph|354x325](https://www.chemistrylearner.com/wp-content/uploads/2022/05/Activation-Energy.jpg)

![[Screenshot_20260323_221605_YouTube.jpg]]

