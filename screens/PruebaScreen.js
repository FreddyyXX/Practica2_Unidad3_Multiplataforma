import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useToast, Toast, ToastTitle, ToastDescription } from '../components/ui/toast';
import { CheckCircle2 } from 'lucide-react-native';
import { Icon } from '../components/ui/icon';

export default function PruebaScreen() {
  const toast = useToast();

  const handleAddToCart = () => {
    toast.show({
      placement: 'top',
      duration: 3000, // 3 segundos
      render: ({ id }) => {
        const toastId = 'toast-' + id;
        return (
          <Toast
            nativeID={toastId}
            action="success"
            variant="solid"
            style={styles.toastContainer}
            // Motion props: animate in/out for a smooth slide/fade
            initial={{ opacity: 0, translateY: -12 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -12 }}
            transition={{ duration: 250 }}
          >
            <View style={styles.toastContent}>
              <Icon as={CheckCircle2} size="lg" color="#15803D" style={{ marginRight: 8 }} />
              <View>
                <ToastTitle style={styles.toastTitle}>Success</ToastTitle>
                <ToastDescription style={styles.toastDescription}>
                  Your Order was placed Successfully, Thanks for shopping with us!
                </ToastDescription>
              </View>
            </View>
          </Toast>
        );
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Tarjeta de producto */}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://gluestack.github.io/public-blog-video-assets/saree.png',
          }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.category}>Fashion Clothing</Text>

        <Text style={styles.title}>Cotton Kurta</Text>
        <Text style={styles.description}>
          Floral embroidered notch neck thread work cotton kurta in white and black.
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={handleAddToCart}>
            <Text style={styles.primaryButtonText}> Add to cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
            <Text style={styles.secondaryButtonText}> Wishlist</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabla de inventario */}
      <View style={styles.card}>
        <Text style={styles.tableTitle}>Recent Inventory</Text>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableHeaderText}>Product</Text>
            <Text style={styles.tableHeaderText}>Size</Text>
            <Text style={styles.tableHeaderText}>Available</Text>
            <Text style={styles.tableHeaderText}>Status</Text>
          </View>

          {[
            { product: 'Dress', size: 'Medium', available: 12, status: 'Soldout', color: '#e74c3c' },
            { product: 'Earring', size: 'Large', available: 90, status: 'In stock', color: '#2ecc71' },
            { product: 'Kurta', size: 'Small', available: 25, status: 'In stock', color: '#2ecc71' },
          ].map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.product}</Text>
              <Text style={styles.tableCell}>{item.size}</Text>
              <Text style={styles.tableCell}>{item.available}</Text>
              <View style={[styles.statusBadge, { backgroundColor: item.color + '33' }]}>
                <Icon as={CheckCircle2} size="sm" color={item.color} />
                <Text style={[styles.statusText, { color: item.color }]}>
                  {'  '}{item.status}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.tableFooter}>Showing recent product availability</Text>
      </View>
    </ScrollView>
  );
}

// 🎨 Estilos visuales
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 12,
  },
  category: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#374151',
    fontWeight: '500',
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  table: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    backgroundColor: '#E5E7EB',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1F2937',
    paddingVertical: 6,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#F3F4F6',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    color: '#374151',
    fontSize: 14,
  },
  statusBadge: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontWeight: '600',
    fontSize: 13,
  },
  tableFooter: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 6,
  },
  // 🟢 Toast personalizado tipo "Success"
  toastContainer: {
    backgroundColor: '#D1FAE5', // verde claro
    borderRadius: 12,
    padding: 12,
    marginTop: 60,
    marginHorizontal: 16,
  },
  toastContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toastTitle: {
    color: '#15803D',
    fontWeight: '700',
    fontSize: 16,
  },
  toastDescription: {
    color: '#166534',
    fontSize: 13,
  },
});
