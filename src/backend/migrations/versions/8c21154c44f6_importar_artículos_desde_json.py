"""Importar artículos desde JSON a la tabla articles.

Revisión neutralizada: la lógica de importación debe hacerse con un script externo,
no dentro de una migración Alembic.
"""

# Identificadores de Alembic
revision = '8c21154c44f6'
down_revision = '02644fa8bb55'
branch_labels = None
depends_on = None

def upgrade():
    pass  # Lógica vacía a propósito

def downgrade():
    pass
