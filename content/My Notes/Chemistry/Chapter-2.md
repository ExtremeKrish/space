---
tags:
  - chemistry
created: 2026-03-21 17:17
title: Chapter-2 Electrochemistry
---
**Topics not Understood**: - 
- Kholrauch's Law
- Limiting Conductivity & graphs
- H20 Electrolysis
---
**Electrochemistry:-** Studty of Proeduction of Electrical Energy from the energy released during a spontaneous chemical reaction,

## Electrochemical Cell
→ Electrolytic Cell
→ Galvanic Cell
### What is Electrolytic Cell
*Jab phone Charge ho raha hota hai ya ham Battery se kisi reaction ko karwa rhe hote hain*
- It's **Non Spontaneous Process** (Not Self-happening) $\Delta G = +ive$
- Charging Process 
- Converts **Electrical Energy** to **Chemical Energy**

| Anode  | Cathode |
| ------ | ------- |
| $+ive$ | $-ive$  |
### Galvanic Cell *(Main)*
*Jab phone discharge ya use ho raha hota hai, i.e uski battery use ho rahi hoti hai*
- Spontaneous Process (Self-Happening)
- Discharging Process
- Converts **Chemical Energy** to **Electrical Energy**
- **Example**:- Daniel Cell / Voltaic Cell
![Galvanic Cell|center|664x386](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Galvanic_cell_with_no_cation_flow.svg/1920px-Galvanic_cell_with_no_cation_flow.svg.png)

| Anode  | Cathode |
| ------ | ------- |
| $-ive$ | $+ive$  |
Da Main Reaction of da chapter
$$
\ce{Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)}
$$
- **Oxidation Half :-** $\ce{Zn(s) -> Zn^2+ (aq) + 2e^-}$ *Oxidation = loss of e*
- **Reduction Half :-** $\ce{Cu^2+(aq) + 2e^- -> Cu (s)}$ *Reduction = gain of e*

## Cell Notation
   **Anodic Reaction**            **Cathodic Reaction**
(solid) | (gas) | (ions/aq) || (ions/aq) | (gas) | (solid)

Example (with conc.):-  Zn | Zn²⁺ (1M) || Cu²⁺ (1M) | Cu

-> Gas cannot be alone on sides so we add a inert electrode (Pt/Graphite/Carbon)

E.g:  `Pt | H₂(g) | H⁺(aq) ||` 

## Electrode Potential (E)
- defined as Tendency of an electrode to **gain or lose electrons**
	- Gain Electrons = **Reduction**
	- Lose Electrons = **Oxidation** 
### Standard Electrode Potential ($E^\circ$)
Same thing, electrode potential of any electrode but measured under fixed standard conditions and relative to SHE (Standard Hydrogen Electrode).
*Electrode potential of a half-cell measured relative to the Standard Hydrogen Electrode (SHE), under standard conditions **(1 M, 298 K, 1 atm)**.*

**STANDARD HYDROGEN ELECTRODE (SHE) :-** Its just reference electrode of Hydrogen, which is taken as 0 Because we need a **baseline** to compare all electrodes

## Electromotive Force (EMF) of the cell  ($E_{cell}$)
- Its basically called Cell Potential means Total Voltage of cell (*cuz till now we were talking about individual electrodes, now it's of cell, basically difference between both electrodes*)
- EMF = difference of electrode potentials
- this one is not under Standard Conditions
### Standard EMF of the cell ($E^\circ_{cell}$)
$$
E^\circ_{cell} = E^\circ_{cathode} - E^\circ_{anode} 
$$
Where $E^\circ_{cathode}$ and $E^\circ_{anode}$ are Reduction Potentials of Electrodes, why? Here's the expl.:
#### How we calculate standard EMF of a cell
- **Anode** = electrode where **oxidation happens** (loss of electrons)
- **Cathode** = electrode where **reduction happens** (gain of electrons)
Cathode i.e. Half Cell's EMF is called Reduction Potential

$E^\circ_{M^+/M}$ → Reduction Potential of Cathode
$E^\circ_{N/N^+}$ → Oxidation Potential Anode
But we need *Reduction Potential of Anode* too i.e. $E^\circ_{N^+/N}$ so we just use negative value cuz opposite of Oxidation is Reduction, so once again:

$E_{cell}^\circ$ = Reduction Potential of Cathode - Reduction Potential of Anode

$RP = -(OP)$

---
**→ Oxidising Agent** Higher reduction potential (E°) ⇒ better oxidising agent (happens at cathode)
**→ Reducing Agent** Lower reduction potential (E°) ⇒ better reducing agent (happens at anode)
### Nerst Equation

$$
E_{cell} = E_{cell}^\circ - \frac{RT}{nF} \ln Q
$$

- R -> Gas Const. $8.314 \,JK^{-1} mol^{-1}$
- T -> Temp. (In Kelvin)
- **n -> moles of $e^-$ exchanged**
- F -> Faraday , 1F = 96500C
- Q -> Reaction Quotent
	- For a reaction $\ce{aA + bB -> cC + dD}$
	- $Q = \large\frac{[C]^c[D]^d}{[A]^a[B]^b}$

$$
E_{cell} = E_{cell}^\circ - \frac{0.059}{n} \log Q
$$
#### At Equillibrium
$$
E^\circ_{cell} = \frac{0.059}{n} \log K_{c}
$$
And $\Delta G = 0$
### Relation with Gibbs Free Energy Charge and EMF
- $\Delta G^\circ$ → Stanadrd Gibbs Free Energy
- $\Delta G$ → Gibbs Free Energy

$\Delta G = -nF\,E_{cell}$
-> $\Large\Delta G^\circ = -nF\,E^\circ_{cell}$
Where
- n = no. Of e^- exchanged
- F = Faraday -> 1F = 96500C *Which is charge of one more of e-*
	- **Moles of e- = No. Of Faraday**
$$
\Delta G = \Delta G^\circ + RT\ln Q \tag{Main Equation}
$$

#### At Equillibrium
- $\Delta G = 0$
- $\Delta G^\circ = - RT\ln K_{eq}$
## Electrolytic Cell
### Electrolysis of Water
### Preferential discharge of Ions (Reactivity)
*Jiska Reductive Potential high, vo hoga reduce over the other who's RP is low.*
$SO_{4}^{2-},NO_{3}^-,CO_{3}^{2-} < OH^- <Cl^-, CH_{3}COO^-$

### Faraday's Laws
1. The amount of substance formed at an electrode depends on how much electricity you pass.
2. If you pass the same electricity through different substances, the amount deposited depends on their **equivalent weight**.

## Resistance and Resistivity
We know that $R = \large\frac{\rho \ell}{A}$, where *R is Resistance* , $\rho$ is *Resistivity* 
- so $\frac{1}{R} = G$  = **Conductance**
- $\frac{1}{\rho} = k$ = **Conductivity/Specific Conductivity**
- and $\frac{\ell}{A} = G^\ast$ = **Cell Constant**
- 
So $$
G = \kappa \frac{A}{\ell}
$$ $$
\kappa = G\cdot G^\ast
$$
#### Units (Important)
- R = ohm;           |    so 1/R = G = $ohm^{-1}$ = mho = $\Omega^{-1}$ 
- $\rho = \frac{R\,A}{\ell}$ -> ohm cm       |         $\kappa = 1/\rho$ -> $ohm^{-1}\,cm^{-1}$ or $S\,cm^-1$
- $G^* = \ell/A = cm^-1$


### Molar Conductivity
$$
\Lambda_{m} = \frac{k\times 1000}{C}
$$
-> k = conductivity
C = Concentration (Molarity)
### Equivalent Conductivity
$$
\Lambda_{eq} = \frac{k\times 1000}{N}
$$
 
=> $N = M \times n\,factor$

## Kohlrausch Law
