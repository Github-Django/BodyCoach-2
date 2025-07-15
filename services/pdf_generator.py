import os
import io
from weasyprint import HTML, CSS
from django.conf import settings


class PDFGenerator:
    def __init__(self, html_content, css_files=None, custom_fonts=None):
        self.html_content = html_content
        self.css_files = css_files or []
        self.custom_fonts = [
            {
                'name': 'Vazir',
                'path': 'static/fonts/farsi-fonts-fa-num/vazir-300.ttf'  # مسیر درست فونت
            }
        ]

    def _generate_font_styles(self):
        font_styles = """
        @page {
            size: A4;
            margin: 1cm;
            direction: rtl;
        }
        @font-face {
            font-family: 'Vazir';
            src: url('file://%s') format('truetype');
        }
        * {
            font-family: 'Vazir', sans-serif !important;
        }
        body {
            direction: rtl;
            font-family: 'Vazir', sans-serif !important;
        }
        """ % os.path.join(settings.BASE_DIR, self.custom_fonts[0]['path'])
        return font_styles

    def generate_pdf(self):
        try:
            pdf_stream = io.BytesIO()

            # Generate font CSS
            font_css = self._generate_font_styles()

            # Combine CSS files
            stylesheets = [CSS(string=font_css)]
            for css_file in self.css_files:
                css_path = os.path.join(settings.BASE_DIR, css_file)
                if os.path.exists(css_path):
                    stylesheets.append(CSS(filename=css_path))

            # Generate PDF with all styles
            HTML(string=self.html_content).write_pdf(
                pdf_stream,
                stylesheets=stylesheets,
                presentational_hints=True
            )

            pdf_stream.seek(0)
            return pdf_stream

        except Exception as e:
            print(f"Error generating PDF: {str(e)}")
            raise