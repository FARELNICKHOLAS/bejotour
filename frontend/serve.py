import http.server
import socketserver
import os

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # If the path does not have an extension and is not the root
        if not self.path.endswith('.html') and not '.' in self.path and self.path != '/':
            # Check if adding .html resolves to a file
            if os.path.exists(self.translate_path(self.path) + '.html'):
                self.path += '.html'
        return super().do_GET()

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Serving on port", PORT)
    httpd.serve_forever()
