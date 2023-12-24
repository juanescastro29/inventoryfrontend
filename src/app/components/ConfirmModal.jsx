import { Modal } from "keep-react";
import { Trash } from "phosphor-react";
import toast from "react-hot-toast";
import CustomerApi from "../api/CustomersApi";
import { mutate } from "swr";
import { apiURL } from "../api";
import SuppliersApi from "../api/SuppliersApi";
import ProductsApi from "../api/ProductsApi";
import PurchasesApi from "../api/PurchasesApi";
import SalesApi from "../api/SalesApi";

const ConfirmModal = ({ confirmModal, viewConfirmModal, type, idDelete }) => {
  const handleConfrim = () => {
    if (type === "customers") {
      toast.promise(CustomerApi.deleteCustomer(idDelete), {
        loading: "Eliminando comprador",
        success: () => {
          viewConfirmModal();
          mutate(apiURL);
          return "Comprador eliminado";
        },
        error: "Error al eliminar compradador",
      });
    } else if (type === "suppliers") {
      toast.promise(SuppliersApi.deleteSupplier(idDelete), {
        loading: "Eliminando proveedor",
        success: () => {
          viewConfirmModal();
          mutate(apiURL);
          return "Proveedor eliminado";
        },
        error: "Error al eliminar proveedor",
      });
    } else if (type === "products") {
      toast.promise(ProductsApi.deleteProduct(idDelete), {
        loading: "Eliminando producto",
        success: () => {
          viewConfirmModal();
          mutate(apiURL);
          return "Producto eliminado";
        },
        error: "Error al eliminar producto",
      });
    } else if (type === "purchases") {
      toast.promise(PurchasesApi.deletePurchase(idDelete), {
        loading: "Eliminando pedido",
        success: () => {
          viewConfirmModal();
          mutate(apiURL);
          return "Pedido eliminado";
        },
        error: "Error al eliminar pedido",
      });
    } else if (type === "sales") {
      toast.promise(SalesApi.deleteSales(idDelete), {
        loading: "Eliminando venta",
        success: () => {
          viewConfirmModal();
          mutate(apiURL);
          return "Venta eliminada";
        },
        error: "Error al eliminar venta",
      });
    }
  };

  return (
    <Modal
      icon={<Trash size={26} color="#3b82f6" />}
      size="lg"
      show={confirmModal}
      onClose={viewConfirmModal}
    >
      <Modal.Header>¿Seguro que quiere eliminar esta fila?</Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer className="justify-center">
        <button
          className="bg-blue-500 rounded-md shadow-lg text-white h-10 w-28"
          onClick={viewConfirmModal}
        >
          Cancelar
        </button>
        <button
          className="bg-blue-500 rounded-md shadow-lg text-white h-10 w-28"
          onClick={handleConfrim}
        >
          Confirmar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
