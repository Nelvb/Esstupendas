"""Fusionar ramas de migración

Revision ID: 8d79be1ea631
Revises: 6a5d6d68c26e, 8c21154c44f6
Create Date: 2025-08-26 13:12:29.256195

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8d79be1ea631'
down_revision = ('6a5d6d68c26e', '8c21154c44f6')
branch_labels = None
depends_on = None


def upgrade():
    pass


def downgrade():
    pass
