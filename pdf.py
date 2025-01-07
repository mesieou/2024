from fpdf import FPDF

# Create a PDF with the problems and solutions
pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font("Arial", size=12)

# Title
pdf.set_font("Arial", style="B", size=14)
pdf.cell(200, 10, txt="Indefinite Integral Problems and Solutions", ln=True, align="C")
pdf.ln(10)

# Problems
problems = [
    r"1. \(\int x^2 \, dx\)",
    r"2. \(\int (3x^3 + 2x) \, dx\)",
    r"3. \(\int \frac{1}{x} \, dx\)",
    r"4. \(\int (4x - 7) \, dx\)",
    r"5. \(\int e^x \, dx\)",
    r"6. \(\int e^{2x} \, dx\)",
    r"7. \(\int \ln(x) \, dx\)",
    r"8. \(\int \sin(x) \, dx\)",
    r"9. \(\int \cos(x) \, dx\)",
    r"10. \(\int \sec^2(x) \, dx\)",
    r"11. \(\int \tan(x) \, dx\)",
    r"12. \(\int \sin^2(x) \, dx\)",
    r"13. \(\int \sec(x) \, dx\)",
    r"14. \(\int \cot^2(x) \, dx\)",
    r"15. \(\int (x^2 + 3x + 1) \, dx\)",
    r"16. \(\int (x^3 - 2x + 5) \, dx\)",
    r"17. \(\int \frac{2x}{x^2 + 1} \, dx\)",
    r"18. \(\int \frac{1}{x^2 + 1} \, dx\)",
    r"19. \(\int \frac{x}{\sqrt{x^2 + 1}} \, dx\)",
]

solutions = [
    "Solution 1: ∫x² dx = (1/3)x³ + C",
    "Solution 2: ∫(3x³ + 2x) dx = (3/4)x⁴ + x² + C",
    "Solution 3: ∫(1/x) dx = ln|x| + C",
    "Solution 4: ∫(4x - 7) dx = 2x² - 7x + C",
    "Solution 5: ∫e^x dx = e^x + C",
    "Solution 6: ∫e^(2x) dx = (1/2)e^(2x) + C",
    "Solution 7: ∫ln(x) dx = xln(x) - x + C",
    "Solution 8: ∫sin(x) dx = -cos(x) + C",
    "Solution 9: ∫cos(x) dx = sin(x) + C",
    "Solution 10: ∫sec²(x) dx = tan(x) + C",
    "Solution 11: ∫tan(x) dx = -ln|cos(x)| + C",
    "Solution 12: ∫sin²(x) dx = (1/2)x - (1/4)sin(2x) + C",
    "Solution 13: ∫sec(x) dx = ln|sec(x) + tan(x)| + C",
    "Solution 14: ∫cot²(x) dx = -cot(x) - x + C",
    "Solution 15: ∫(x² + 3x + 1) dx = (1/3)x³ + (3/2)x² + x + C",
    "Solution 16: ∫(x³ - 2x + 5) dx = (1/4)x⁴ - x² + 5x + C",
    "Solution 17: ∫(2x/(x² + 1)) dx = ln(x² + 1) + C",
    "Solution 18: ∫(1/(x² + 1)) dx = arctan(x) + C",
    "Solution 19: ∫(x/√(x² + 1)) dx = √(x² + 1) + C",
]

pdf.set_font("Arial", size=12)
pdf.cell(200, 10, txt="Problems", ln=True)
for p in problems:
    pdf.cell(200, 10, txt=p, ln=True)
pdf.ln(
