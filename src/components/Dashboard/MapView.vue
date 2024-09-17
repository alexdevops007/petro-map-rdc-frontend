<template>
  <div class="container mx-auto mt-6">
    <h2 class="text-2xl font-bold mb-4">Carte des Concessions Pétrolières</h2>
    <div id="map" class="map-container"></div>  <!-- La carte s'affichera ici -->
  </div>
</template>

<script>
import L from 'leaflet';  // Import de Leaflet pour la carte
import markerIcon from '@/assets/marker-icon.png';  // Importation de l'icône du marqueur
import markerShadow from '@/assets/marker-shadow.png';  // Importation de l'ombre du marqueur
import { mapState } from 'vuex';

export default {
  data() {
    return {
      map: null,  // Référence à l'instance Leaflet de la carte
      markers: [],  // Tableau pour stocker les marqueurs
      customIcon: L.icon({  // Configuration de l'icône personnalisée du marqueur
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],  // Taille de l'icône
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      }),
    };
  },
  computed: {
    ...mapState('map', ['concessions']),  // Récupération des concessions depuis Vuex
  },
  mounted() {
    this.$nextTick(() => {  // Assurez-vous que le DOM est complètement prêt
      this.initMap();  // Initialisation de la carte
    });
  },
  methods: {
    // Initialisation de la carte Leaflet
    initMap() {
      // Vérifiez que la carte n'est pas déjà initialisée
      if (!this.map) {
        this.map = L.map('map').setView([-4.4419, 15.2663], 6);  // Vue centrée sur Kinshasa

        // Ajout des tuiles OpenStreetMap à la carte
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(this.map);

        // Attendre que la carte soit prête avant de faire d'autres manipulations
        this.map.whenReady(() => {
          console.log('La carte est prête.');
          this.fetchConcessionsForMap();  // Récupération des concessions après l'initialisation de la carte
        });
      }
    },
    // Fonction pour afficher les concessions sur la carte
    plotConcessionsOnMap() {
      if (!this.map) {
        console.error("La carte n'est pas encore initialisée.");
        return;
      }

      // Supprimer les anciens marqueurs
      this.markers.forEach(marker => this.map.removeLayer(marker));
      this.markers = [];

      // Vérifiez que les concessions existent
      if (Array.isArray(this.concessions) && this.concessions.length) {
        this.concessions.forEach(concession => {
          const operator = concession.operator || "Non défini";  // Utilisez une valeur par défaut si l'opérateur est undefined
          const marker = L.marker([concession.location.coordinates[1], concession.location.coordinates[0]], {
            icon: this.customIcon,
          }).addTo(this.map)
            .bindPopup(`<b>${concession.name}</b><br>Opérateur: ${operator}`);
          this.markers.push(marker);
        });
      } else {
        console.log("Aucune concession à afficher sur la carte.");
      }
    },
    // Fonction pour récupérer les concessions via Vuex
    async fetchConcessionsForMap() {
      try {
        await this.$store.dispatch('map/fetchConcessionsForMap');  // Récupération des concessions
        this.plotConcessionsOnMap();  // Afficher les concessions sur la carte après les avoir récupérées
      } catch (error) {
        console.error("Erreur lors de la récupération des concessions :", error);
      }
    },
  },
  watch: {
    // Surveille les changements dans les concessions et les affiche sur la carte
    concessions: {
      handler() {
        this.plotConcessionsOnMap();
      },
      immediate: true,  // Exécuter immédiatement lors du premier rendu
    },
  },
};
</script>

<style scoped>
/* Styles pour rendre la carte plus esthétique */
#map {
  height: 650px;  /* Hauteur de la carte */
  width: 100%;  /* Utiliser toute la largeur disponible */
  border-radius: 10px;  /* Coins arrondis pour un effet pro */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);  /* Ajout d'une ombre pour améliorer le design */
}
</style>
