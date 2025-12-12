class ProjectsController < ApplicationController
  def index
    # Plus besoin de charger les projets depuis le YAML
    # Tout est maintenant en dur dans le template
  end

  def show
    # La page show utilise maintenant des partials en dur
    # Pas besoin de charger des données depuis le modèle
    render :show
  end
end
