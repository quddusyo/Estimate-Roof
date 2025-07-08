#  Roofing Quote Calculator

A simple React component that calculates estimated roofing service costs based on user inputs. This tool helps homeowners and service providers to quickly determine a ballpark quote based on the square footage, damage level, and selected additional services. <br />
**Note: Numbers and data are temporary and can be modified to match comporate requirements.**

---

##  Pricing Breakdown

### 🔹 Base Cost
- **$4.00 per square foot**

---

### 🔹 Damage Level Adjustments
| Damage Level | Additional Cost |
|--------------|-----------------|
| None         | $0              |
| Minor        | $500            |
| Moderate     | $1,000          |
| Severe       | $2,000          |

---

### 🔹 Optional Services
| Service               | Additional Cost |
|------------------------|-----------------|
| Gutter Cleaning        | $150            |
| Shingle Replacement    | $700            |
| Moss Removal           | $300            |

---

##  Example Useage

**Input:**
- 2,000 sq. ft.
- Damage: Moderate
- Services: Gutter Cleaning + Moss Removal

**Calculation:**
- Base: 2,000 × $4 = $8,000  
- Damage: +$1,000  
- Gutter Cleaning: +$150  
- Moss Removal: +$300  

**➡️ Total Quote: `$9,450`**

---

##  Notes

- All prices are hardcoded and can be modified in the source code.
- This calculator is for **estimation purposes only**.
